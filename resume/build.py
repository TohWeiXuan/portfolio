"""Render Resume-TohWeiXuan.md to public/d/Resume-TohWeiXuan.pdf.

Usage: python resume/build.py
Needs: pip install markdown, plus Google Chrome or Microsoft Edge for printing.
"""
import os
import subprocess
import sys
import tempfile
from pathlib import Path

import markdown

HERE = Path(__file__).resolve().parent
SRC = HERE / "Resume-TohWeiXuan.md"
OUT = HERE.parent / "public" / "d" / "Resume-TohWeiXuan.pdf"

BROWSERS = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
]

CSS = """
@page { size: A4; margin: 10mm 15mm; }
* { box-sizing: border-box; }
body { font-family: Arial, Helvetica, sans-serif; font-size: 9pt; line-height: 1.28; color: #1a1a1a; margin: 0; }
a { color: inherit; text-decoration: none; }
h1 { font-size: 24pt; font-weight: 400; margin: 0 0 2pt; letter-spacing: -0.2pt; }
.subtitle { color: #555; font-size: 10.5pt; margin: 0 0 3pt; }
.contact { font-size: 9pt; margin: 0 0 4pt; }
h2 { font-size: 8.5pt; font-weight: 700; letter-spacing: 2.2pt; text-transform: uppercase;
     border-bottom: 1.2pt solid #1a1a1a; padding-bottom: 2.5pt; margin: 9pt 0 4pt; }
h3 { font-size: 10.5pt; margin: 5pt 0 0; display: flex; justify-content: space-between; align-items: baseline; }
h3 .when { font-weight: 400; font-size: 9pt; color: #555; white-space: nowrap; padding-left: 12pt; }
.org { font-style: italic; color: #555; margin: 1pt 0 2pt; }
p { margin: 0 0 3pt; }
ul { margin: 2pt 0 0; padding-left: 14pt; }
li { margin: 0 0 1pt; }
li::marker { content: "\\25B8  "; font-size: 8pt; }
h2, h3 { break-after: avoid; }
li { break-inside: avoid; }
"""


def find_browser():
    for path in BROWSERS:
        if os.path.exists(path):
            return path
    sys.exit("Chrome or Edge not found; add its path to BROWSERS.")


def main():
    body = markdown.markdown(SRC.read_text(encoding="utf-8"), extensions=["attr_list", "extra"])
    html = f'<!doctype html><html><head><meta charset="utf-8"><title>Toh Wei Xuan - Resume</title><style>{CSS}</style></head><body>{body}</body></html>'

    with tempfile.TemporaryDirectory() as tmp:
        page = Path(tmp) / "resume.html"
        page.write_text(html, encoding="utf-8")
        subprocess.run([
            find_browser(), "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
            f"--user-data-dir={Path(tmp) / 'profile'}",
            f"--print-to-pdf={OUT}", page.as_uri(),
        ], check=True, capture_output=True)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
