const uniqueString = require('unique-string');
const fs = require('fs');

const readContent = async (path) => {
    try {
        return (await fs.promises.readFile(path, 'utf-8'));
    } catch(e) {
        console.log(e);
    }
   
}

export const loadPost = async (title, path) => {
    return {
        _id: uniqueString(),
        createdDate: Date.now(),
        title,
        content: await readContent(path)
    }
}
