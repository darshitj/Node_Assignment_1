const fs = require('fs');

function unlinkFile(fpath)
{
    return new Promise((success,fail) => {
        fs.unlink(fpath,(err,data) => {
            if(err)
                fail(err);
            else
                success(data);
        })
    })
}

unlinkFile("./sample_unlink__file.txt")
.then((data) => {
        console.log("Your File  has been Unlinked  Successfully ");
    })
    .catch((err) => {
        console.log("Your File  has been not Unlinked");
})
