var greeting = process.env.GREETING;
var name = process.env.NAME;

module.exports = function() {
  return `${greeting}, ${name}!!`;
}