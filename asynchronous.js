async function fcc() {
    let result = "Ya, kamu benar ini outputnya";
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Aduh kamu kurang teliti"), 1000);
    });
    result = await promise;
    console.log(result);
}
fcc()