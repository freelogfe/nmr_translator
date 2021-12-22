const fs = require("fs");
const nmr_translator = require("./index");

compile();

// decompile();

function compile() {
    let result = nmr_translator.compile(fs.readFileSync("./resources/zhaojn.sc", "utf-8"));
    fs.writeFile("./resources/zhaojn.json", JSON.stringify(result, null, 4), (err) => {
        if (err) throw err;
    });
}

function decompile() {
    let result = JSON.parse(fs.readFileSync("./resources/zhaojn.json"));
    let content = nmr_translator.decompile(result);

    console.log(content);
}
