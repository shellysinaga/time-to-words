// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  const numberWords = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'thirty',
    31: 'thirty one',
    32: 'thirty two',
    33: 'thirty three',
    34: 'thirty four',
    35: 'thirty five',
    36: 'thirty six',
    37: 'thirty seven',
    38: 'thirty eight',
    39: 'thirty nine',
    40: 'forty',
    41: 'forty one',
    42: 'forty two',
    43: 'forty three',
    44: 'forty four',
    45: 'forty five',
    46: 'forty six',
    47: 'forty seven',
    48: 'forty eight',
    49: 'forty nine',
    50: 'fifty',
    51: 'fifty one',
    52: 'fifty two',
    53: 'fifty three',
    54: 'fifty four',
    55: 'fifty five',
    56: 'fifty six',
    57: 'fifty seven',
    58: 'fifty eight',
    59: 'fifty nine',
  };

  const splittedTime = time.split(':');
  const hours = parseInt(splittedTime[0]);
  const minutes = parseInt(splittedTime[1]);
  let formattedTime = '';

  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday';
  }

  if (minutes === 0) {
    return numberWords[hours] + ' o\'clock';
  }

  if (minutes > 30) {
    if (minutes === 45) formattedTime = 'quarter to ' + numberWords[hours+1]
    else {
      formattedTime = numberWords[60 - minutes] + ' to ' + numberWords[hours+1]
    }
  } else if (minutes < 30) {
    if (minutes === 15) formattedTime = 'quarter past ' + numberWords[hours]
    else formattedTime = numberWords[minutes] + ' past ' + numberWords[hours]
  } else {
    formattedTime = 'half past ' + numberWords[hours];
  }

  return formattedTime;
}

module.exports = { convertTimeToWords };