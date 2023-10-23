/**
 * Compact Discs (CDs) uses pits and lands to store digital data. Pits and lands don't directly encode 1's and 0's; instead, a change from pit to land (or vice versa) encodes a 1, and a lack of change encodes a 0.
 * Your job is to read such a CD. You will be provided a string S representing the raw pits-and-lands data stream, made in this fashion:
 * 1. it consists of up to two(2) unique characters, one representing a pit and one representing a land;
 * 2. it always starts with one(1) pit character, and the data is encoded between characters as "change" or "no-change" – if there is no data, the stream will contain that single pit character only;3. the exact data encoded are 8-bit binaries (MSB first) of printable ASCII characters of arbitrary length.You will decode S into the original ASCII string and output this string; output NO DATA if S does not contain any data. 
 * Input
 * Line 1: A string S, consisting of up to two(2) unique ASCII printable characters, representing a pits-and-lands data stream.
 * one of these characters may be a space.
 * Output
 * Line 1: A string that may contain any printable ASCII character, including spaces.
 * Constraints
 * 1≤ Length of S ≤ 801
 * Length of S MOD 8 = 1
 * 1≤ Length of output ≤ 100
 * Example
 * Input
 * ###_####_
 * Output
 * 1
 * */

/**
 * Test Case
 * %%+++%+%%%+%%%++%%+%++%+++%+++%%++%+%%%++++%%%%%%%+%%%+%++%++%+%++%++%+%%%+%%+%+++%+++++%%%+++++++%+++%+%%+%%+++%%+%++%+++%+++%%+++%%%%%%%+%+%%%++%++%+%++%+%%++%%%+++++++%+%%++%%+%+++++
 * Never gonna give you up
 */