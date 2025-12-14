from PIL import Image
from collections import Counter

def get_dominant_color(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGB")
        img = img.resize((50, 50))  # Resize to speed up
        pixels = list(img.getdata())
        # Filter out white/near-white and black/near-black background pixels if any
        filtered_pixels = [p for p in pixels if not (p[0] > 240 and p[1] > 240 and p[2] > 240) and not (p[0] < 15 and p[1] < 15 and p[2] < 15)]
        
        if not filtered_pixels:
            return (0, 0, 0) # Fallback

        counts = Counter(filtered_pixels)
        most_common = counts.most_common(1)[0][0]
        return most_common
    except Exception as e:
        print(f"Error: {e}")
        return None

color = get_dominant_color("d:/upwork/MSME/my-app/public/izitec-logo.png")
if color:
    print(f"#{color[0]:02x}{color[1]:02x}{color[2]:02x}")
else:
    print("Could not determine color")
