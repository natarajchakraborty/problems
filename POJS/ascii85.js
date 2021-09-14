// String.prototype.toAscii85 = function() {

//     let charset = 'UTF-8';
//     let useEOD = true;

//     const getEncodedChunk = (tuple, bytes = 4) =>
// 	{
// 		var output;
// 		let d = ((tuple[0] << 24) | (tuple[1] << 16) | (tuple[2] << 8) | tuple[3]) >>> 0;

// 		if(d === 0 && bytes == 4)
// 		{
// 			output = new Uint8Array(1);
// 			output[0] = 0x7a; // z
// 		}
// 		else
// 		{
// 			output = new Uint8Array(bytes + 1);

// 			for(let i = 4; i >= 0; i--)
// 			{
// 				if(i <= bytes)
// 				{
// 					output[i] = d % 85 + 0x21; // 0x21 = '!'
// 				}

// 				d /= 85;
// 			}
// 		}

// 		return output;
// 	}

//     const fromByteArray = (byteArray, useEOD = true) =>
// 	{
// 		let output = [];
// 		let lineCounter = 0;

// 		if(useEOD)
// 		{
// 			output.push(0x3c); // <
// 			output.push(0x7e); // ~
// 		}

// 		for(let i = 0; i < byteArray.length; i += 4)
// 		{
// 			let tuple = new Uint8Array(4);
// 			let bytes = 4;

// 			for(let j = 0; j < 4; j++)
// 			{
// 				if(i + j < byteArray.length)
// 				{
// 					tuple[j] = byteArray[i + j];
// 				}
// 				else
// 				{
// 					tuple[j] = 0x00;
// 					bytes--;
// 				}
// 			}

// 			let chunk = getEncodedChunk(tuple, bytes);
// 			for(let j = 0; j < chunk.length; j++)
// 			{
// 				output.push(chunk[j]);
// 				lineCounter++;
// 			}
// 		}

// 		if(useEOD)
// 		{
// 			output.push(0x7e); // ~
// 			output.push(0x3e); // >
// 		}

// 		return String.fromCharCode.apply(null, output);
// 	}

//     return fromByteArray(new TextEncoder(charset || "UTF-8").encode(this.valueOf()), useEOD);
// }
  
// String.prototype.fromAscii85 = function() {
//     const TUPLE_BITS = [24, 16, 8, 0];
// 	const POW_85_4 = [
// 		85*85*85*85,
// 		85*85*85,
// 		85*85,
// 		85,
// 		1
// 	];
//     let charset = 'UTF-8';
    
//     const getByteArrayPart = (tuple, bytes = 4) =>
// 	{
// 		let output = new Uint8Array(bytes);

// 		for(let i = 0; i < bytes; i++)
// 		{
// 			output[i] = (tuple >> TUPLE_BITS[i]) & 0x00ff;
// 		}

// 		return output;
// 	}

// 	const toByteArray = (text) =>
// 	{
// 		const pushPart = () =>
// 		{
// 			let part = getByteArrayPart(tuple, tupleIndex - 1);
// 			for(let j = 0; j < part.length; j++)
// 			{
// 				output.push(part[j]);
// 			}
// 			tuple = tupleIndex = 0;
// 		}

// 		let output = [];
// 		let stop = false;

// 		let tuple = 0;
// 		let tupleIndex = 0;

// 		let i = text.startsWith("<~") && text.length > 2 ? 2 : 0;
// 		do
// 		{
// 			// Skip whitespace
// 			if(text.charAt(i).trim().length === 0)
// 				continue;

// 			let charCode = text.charCodeAt(i);

// 			switch(charCode)
// 			{
// 				case 0x7a: // z
// 					if(tupleIndex != 0)
// 					{
// 						throw new Exception("Unexpected 'z' character at position " + i);
// 					}

// 					for(let j = 0; j < 4; j++)
// 					{
// 						output.push(0x00);
// 					}
// 					break;
// 				case 0x7e: // ~
// 					let nextChar = '';
// 					let j = i + 1;
// 					while(j < text.length && nextChar.trim().length == 0)
// 					{
// 						nextChar = text.charAt(j++);
// 					}

// 					if(nextChar != '>')
// 					{
// 						throw new Exception("Broken EOD at position " + j);
// 					}

// 					if(tupleIndex)
// 					{
// 						tuple += POW_85_4[tupleIndex - 1];
// 						pushPart();
// 					}

// 					stop = true;
// 					break;
// 				default:
// 					if(charCode < 0x21 || charCode > 0x75)
// 					{
// 						throw new Exception("Unexpected character with code " + charCode + " at position " + i);
// 					}

// 					tuple += (charCode - 0x21) * POW_85_4[tupleIndex++];
// 					if(tupleIndex >= 5)
// 					{
// 						pushPart();
// 					}
// 			}
// 		}
// 		while(i++ < text.length && !stop)

// 		return new Uint8Array(output);
// 	}
//     return new TextDecoder(charset || "UTF-8").decode(toByteArray(this.valueOf()));
// }
  
const ifAllzero = (a) => {
    for(let i = 0 ; i < a.length; i++){
        if(!a.charCodeAt(i) === 0)
            return false;
    }
    return true;
}
function encode_ascii85(a) {
const ifAllzero = (a) => {
    for(let i = 0 ; i < a.length; i++){
        if(!(a.charCodeAt(i) === 0))
            return false;
    }
    return true;
  }
  
  console.log('input ', a, ' length ', a.length);
  console.log('charCodeAt');
  for(let x = 0 ; x < a.length; x++){
    console.log(a.charCodeAt(x))
  }
  if(ifAllzero(a) && a.length && a.length < 4){
        return "<~" + Array(a.length + 1).join("!") + "!~>";
  }

  if(!a && isNaN(a.charCodeAt(0))){        
      return "<~~>";
  }
  console.log('normal');
let b, c, d, e, f, g, h, i, j, k;
for (b = "\x00\x00\x00\x00".slice(a.length % 4 || 4), a += b,
    c = [], d = 0, e = a.length; e > d; d += 4){f = (a.charCodeAt(d) << 24) + (a.charCodeAt(d + 1) << 16) + (a.charCodeAt(d + 2) << 8) + a.charCodeAt(d + 3),
    0 !== f ? (k = f % 85, f = (f - k) / 85, j = f % 85, f = (f - j) / 85, i = f % 85,
        f = (f - i) / 85, h = f % 85, f = (f - h) / 85, g = f % 85, c.push(g + 33, h + 33, i + 33, j + 33, k + 33)) : c.push(122);} 
return function(a, b) {
    for (var c = b; c > 0; c--) a.pop();
}(c, b.length), "<~" + String.fromCharCode.apply(String, c) + "~>";
  }
  
  function decode_ascii85(a) {
    let size2 = 0;
    let input = a.slice(2, -2).replace(/[\s\n]/g, '');
    let output = "";

    for(let i = 0; i < input.length; ) {
        if (input[i] === 'z') {
            output += '\u0000\u0000\u0000\u0000';
            i++
        } else {
            let word = 0;

            if (input.length - i < 5) {    // last iteration
                size2 = 5 - (input.length - i);
                input = input + Array(size2 + 1).join('u');
            }
            word += (input.charCodeAt(i) - 33) * 85 * 85 * 85 * 85;
            word += (input.charCodeAt(i + 1) - 33) * 85 * 85 * 85;
            word += (input.charCodeAt(i + 2) - 33) * 85 * 85;
            word += (input.charCodeAt(i + 3) - 33) * 85;
            word += (input.charCodeAt(i + 4) - 33);

            const group = new Array(4);
            group[3] = word % 256;
            word /= 256 | 0;
            group[2] = word % 256;
            word /= 256 | 0;
            group[1] = word % 256;
            word /= 256 | 0;
            group[0] = word;

            output += group.map(function (c) {
                return String.fromCharCode(c);
            }).join('');

            i += 5;
        }
    }

    output = size2 ? output.slice(0, -size2) : output;
    return output;
  }
//console.log("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero nisi, laoreet ut scelerisque et, gravida sed leo. Nulla blandit pellentesque congue. Suspendisse potenti. Aliquam sodales sit amet ipsum nec vestibulum. Phasellus sagittis magna in laoreet interdum. Donec in arcu ut urna sodales luctus consequat in velit. Donec mattis diam vehicula efficitur dignissim. Nunc accumsan enim sed mollis suscipit. Fusce ullamcorper eros et iaculis eleifend. Ut a ultrices lectus, eget vulputate lorem. Curabitur vitae consectetur turpis, ac facilisis sapien. Nunc euismod eu orci at blandit. Donec blandit id erat sed maximus. Fusce a neque vel ante vestibulum facilisis vel id.".toAscii85().fromAscii85());


console.log(decode_ascii85('<~;f?Ma+92BAz!!$qJA0:jPzz!!!"FATD^#F!(G_zz!,,qaAK_~>'));
let op = 'Some \u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000odd \u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000zeroes \u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000here!';
console.log('expected ', op);
//expected '<~!!~>' to equal '<~z~>'

// '<~!!!!!~>' to equal '<~z~>'