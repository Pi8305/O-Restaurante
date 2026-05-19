const multer = require('multer');

// Diretório onde os arquivos serão salvos
// ATENÇÃO: É necessário manter o diretório 'public' para poder utilizar no front-end
const diretorio = 'public/img/pfp';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, diretorio) 
  },
  
  filename: (req, file, cb) => {
    
    const novoNomeArquivo = require('crypto')
      .randomBytes(64)
      .toString('hex');


    cb(null, `${novoNomeArquivo}.png`)
  }
});

module.exports = multer({ storage });