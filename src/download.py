import os
import requests

# List of image URLs
urls = [
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider40.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider38.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider13.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider15.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider3.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider37.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider19.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider32.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider8.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider17.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider30.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider27.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider28.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider4.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider22.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider21.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider1.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider2.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider16.webp",
    "https://cdn.web.imagine.art/imagine-frontend/assets/images/RowImageSlider7.webp"
]

# Define the path to the Downloads folder
downloads_folder = os.path.expanduser("~/Downloads")

# Function to download and save an image
def download_image(url, index):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            file_path = os.path.join(downloads_folder, f"s3_{index}.webp")
            with open(file_path, "wb") as file:
                file.write(response.content)
            print(f"Downloaded: {file_path}")
        else:
            print(f"Failed to download {url}")
    except Exception as e:
        print(f"Error downloading {url}: {e}")

# Loop through the URLs and download the images
for i, url in enumerate(urls, start=1):
    download_image(url, i)

print("Download completed!")
