'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { BOARD_DATA, BoardType } from '../data/board-data';

interface BoardModalProps {
  selectedBoard: BoardType | null;
  onClose: () => void;
  onSelectBoard: (board: BoardType) => void;
}

export default function BoardModal({ selectedBoard, onClose, onSelectBoard }: BoardModalProps) {
  const router = useRouter();

  if (!selectedBoard) return null;

  const currentBoard = BOARD_DATA[selectedBoard];

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white border-8 border-black p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-bold text-black">{currentBoard.title.toUpperCase()}</h3>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 bg-white hover:bg-black text-black/80 hover:text-white border-2 border-black flex items-center justify-center transition-colors rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-lg text-black leading-relaxed font-medium border-l-4 border-primary pl-4">
            {currentBoard.description}
          </p>
        </div>

        {/* Members */}
        <div className="space-y-12">
          {/* CEO / Lead Section - Centered */}
          {currentBoard.members.length > 0 && (
            <motion.div
              key="lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group bg-white border-4 border-black p-6 hover:bg-primary text-black/80 hover:text-white transition-all duration-300 hover:scale-105 max-w-sm mx-auto rounded-3xl"
            >
              <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center mb-4 mx-auto rounded-2xl">
                <span className="text-white font-bold text-xl">
                  {currentBoard.members[0].name.charAt(0)}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">
                {currentBoard.members[0].name.toUpperCase()}
              </h4>
              <p className="font-bold mb-2 text-center px-1">
                {currentBoard.members[0].position.toUpperCase()}
              </p>
              <div className="hidden group-hover:flex hover:cursor-pointer absolute bottom-4 right-4 opacity-70 hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          )}

          {/* Other Members */}
          {currentBoard.members.length > 1 && (
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentBoard.members.slice(1).map((member, index) => (
                  <motion.div
                    key={`${member.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="relative group bg-white border-4 border-black p-6 hover:bg-primary text-black/80 hover:text-white transition-all duration-300 hover:scale-105 rounded-3xl"
                  >
                    <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center mb-4 mx-auto rounded-2xl">
                      <span className="text-white font-bold text-xl">{member.name.charAt(0)}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-center">{member.name.toUpperCase()}</h4>
                    <p className="font-bold mb-2 text-center">{member.position.toUpperCase()}</p>
                    <div className="hidden group-hover:flex hover:cursor-pointer absolute bottom-4 right-4 opacity-70 hover:opacity-100 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      {(selectedBoard === 'supervisory' || selectedBoard === 'advisory') && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectBoard(selectedBoard === 'supervisory' ? 'executive' : 'supervisory');
          }}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 group bg-primary hover:bg-black text-white px-6 py-8 hover:cursor-pointer transition-all duration-300 flex items-center gap-2 font-semibold border-4 border-black shadow-xl z-[60] rounded-3xl"
        >
          <svg className="w-8 h-8 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-lg">{selectedBoard === 'supervisory' ? 'Executive' : 'Supervisory'}</span>
            <span className="text-lg">Board</span>
          </div>
        </button>
      )}

      {selectedBoard !== 'advisory' ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectBoard(selectedBoard === 'executive' ? 'supervisory' : 'advisory');
          }}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 group bg-primary hover:bg-black text-white px-6 py-8 hover:cursor-pointer transition-all duration-300 flex items-center gap-2 font-semibold border-4 border-black shadow-xl z-[60] rounded-3xl"
        >
          <div className="flex flex-col items-end leading-tight">
            <span className="text-lg">{selectedBoard === 'executive' ? 'Supervisory' : 'Advisory'}</span>
            <span className="text-lg">Board</span>
          </div>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
            router.push('/companies');
          }}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 group bg-primary hover:bg-black text-white px-6 py-8 hover:cursor-pointer transition-all duration-300 flex items-center gap-2 font-semibold border-4 border-black shadow-xl z-[60] rounded-3xl"
        >
          <div className="flex flex-col items-end leading-tight">
            <span className="text-lg">Our</span>
            <span className="text-lg">Companies</span>
          </div>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
