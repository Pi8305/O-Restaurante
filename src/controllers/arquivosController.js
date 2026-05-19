const fs = require('fs');

function salvar(req, res) {
    const nomeTemp = req.file.filename;
    const id = req.body.id
    const arquivo = `public/img/${id}.png`;

    if (fs.existsSync(arquivo)) {
        fs.unlinkSync(arquivo);
    }

    fs.renameSync(
        `public/img/pfp/${nomeTemp}`,
        `public/img/pfp/${id}.png`
    );

    res.status(200).send("Imagem salva com sucesso!");
}

module.exports = { salvar }