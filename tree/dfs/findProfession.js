function findProfession(level, pos) {
  if (findProffesion(level, pos) == "e") {
    return "Engineer";
  } else {
    return "Doctor";
  }
}
function findProffesion(level, pos) {
  // Base case
  if (level == 1) return "e";

  // Recursively find parent's
  // profession. If parent
  // is a Doctor, this node
  // will be a Doctor if it
  // is at odd position and an
  // engineer if at even position
  if (findProffesion(level - 1, (pos + 1) / 2) == "d")
    return pos % 2 > 0 ? "d" : "e";

  // If parent is an engineer,
  // then current node will be
  // an engineer if at add
  // position and doctor if even
  // position.
  return pos % 2 > 0 ? "e" : "d";
}
