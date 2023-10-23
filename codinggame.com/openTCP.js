/**
 * https://www.codingame.com/ide/631760698b5714dd9757cba4133d4e5a3e000e8b
 * You must output the number of open TCP ports given the results of a port scan.
 * You are given a string representing the results of a port scan of one or more ports. Each port's result consists of the PortNumber, the status of open (O) or closed (C), and the protocol TCP (T) or UDP (U). For example, 22OT means that TCP port 22 is open.
 * Each port's result is separated by a comma within the string. For example, 22OT,67CU,80CT.
 * Input
 * Line 1: A string, scan, representing the port scan result of one or more ports.
 * Output
 * An integer representing the number of open TCP ports.
 * Constraints
 * scan contains at least one port scan result.
 * PortNumber is in the range of 1 to 65535 inclusive.
 */

const scan = readline().split(',');
let output = 0;
console.error(scan);
for (let i = 0 ;i < scan.length ;i++) {
    const input = scan[i].split('');
    console.error(input);
    const protocol = input.pop().toUpperCase();
    const status = input.pop().toUpperCase();
    const port = input.join('');
    console.error(port,status,protocol, output)
    if(port >= 1 && port <= 65535 && status === 'O' && protocol === 'T') {
        output++;
    }
}
console.log(output);

/** Test Case
 * [ '21OT', '22OT', '67CU', '123OU', '443CT' ]
 * [ '25CT', '66CU', '67OU', '80CT', '123OU', '3389CT' ]
 * [ '25CT', '66CU', '67OU', '80CT', '123OU', '3389CT' ]
 * [ '1OT', '65535OT' ]
 * [ '123OU' ]
 */

/**
 * Improvement
 * - can use regex 'OT' to check and count the string match
 */