/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let uniqEmails = new Set();
    
    for(let email of emails){
        let parts = email.split('@');
        let local = parts[0].split(/\+/);
        let name = local[0].replaceAll('.','');
        uniqEmails.add(name + '@' + parts[1])
    }
    return uniqEmails.size;
};