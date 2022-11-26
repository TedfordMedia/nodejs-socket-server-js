
function threeTools() {
    this.theName = "mainTools";

    this.mainPart = function () {
        console.log("mainTools.mainPart()");
    }
    
}
export default new threeTools();
