export class CoreTeam {
  members: string[] = [
      'alexeagle',
      'alxhub',
      'IgorMinar',
      'bradlygreen',
      'btford',
      'caitp',
      'jbdeboer',
      'jelbourn',
      'jeffbcross',
      'juliemr',
      'jteplitz602',
      'kegluneq',
      'matsko',
      'mlaval',
      'matanlurey',
      'mprobst',
      'mhevery',
      'naomiblack',
      'petebacondarwin',
      'pkozlowski-opensource',
      'rkirov',
      'sjelin',
      'robertmesserle',
      'rodyhaddad',
      'tbosch',
      'vsavkin',
      'vicb',
      'yjbanov'
  ];
  memberSet: any = {}
 
  constructor() {
    this.members.forEach(user => this.memberSet[user.toLowerCase()] = true);
  }
    
  has(name:string): boolean {
    return this.memberSet.hasOwnProperty(name.toLowerCase());
  }
}

export var coreTeam = new CoreTeam();