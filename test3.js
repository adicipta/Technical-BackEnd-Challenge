/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
  var isArray = data instanceof Array;
  for (var k in data){
    if (data[k]===null) isArray ? obj.splice(k,1) : delete data[k];
    else if (typeof data[k]=='object') result(data[k]);
  }
  return JSON.stringify(data, null);
}

console.log(result(data));
