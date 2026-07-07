import shutil, os

src = r"C:\Users\AJAY\.gemini\antigravity-ide\brain\c07695b3-56b5-46d3-8e6c-3134189783bf"
dst = r"C:\Users\AJAY\OneDrive\Desktop\JGM-Charitable-Trust\images"

files = [
    ("media__1783424361473.jpg", "kanduku-construction-1.jpg"),
    ("media__1783424361681.jpg", "kanduku-construction-2.jpg"),
    ("media__1783424361703.jpg", "kanduku-construction-3.jpg"),
    ("media__1783424361831.jpg", "kanduku-construction-4.jpg"),
]

for src_file, dst_file in files:
    full_src = os.path.join(src, src_file)
    full_dst = os.path.join(dst, dst_file)
    shutil.copy2(full_src, full_dst)
    print(f"Copied: {dst_file}")

print("All done!")
