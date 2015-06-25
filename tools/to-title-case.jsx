module.exports = function(str){
    return str.split(' ').filter(str => str.length).map(str => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()).join(' ');
};