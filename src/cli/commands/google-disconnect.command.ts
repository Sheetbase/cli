export class GoogleDisconnectCommand {
  constructor() {}

  run(input: 'all' | 'active' | 'local' | string) {
    console.log('google disconnect ...', input);
  }
}