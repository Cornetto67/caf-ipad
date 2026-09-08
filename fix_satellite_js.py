files = ["Synthèse.html", "Flux.html", "Parc.html", "RH.html", "conduite.html"]

for file in files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()

    # Add sql-wasm-b64.js before sqlite-engine.js if not present
    if "sql-wasm-b64.js" not in content:
        content = content.replace('<script src="sqlite-engine.js?v=1.4.1"></script>', '<script src="libs/sql-wasm-b64.js"></script>\n    <script src="sqlite-engine.js?v=1.4.1"></script>')

    with open(file, "w", encoding="utf-8") as f:
        f.write(content)
