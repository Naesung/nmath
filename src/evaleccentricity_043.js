/**
 * 043 Ÿ���� �̽ɷ�
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} THe eccentricity of eval
 * 
 */
exports.evalEccentricity = function (a, b) {
    return ((1 - ((b ** 2) / (a ** 2))) ** 0.5)
}
