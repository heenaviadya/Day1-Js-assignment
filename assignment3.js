let obj = {
    radius: 4,
    height: 10,
    showArea: function()
    {
        let area = 3.14*obj.radius*obj.radius*obj.height;
        return area;
    }

}
console.log(obj.showArea());