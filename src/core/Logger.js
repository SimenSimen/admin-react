class Logger {
    log(msg) {
        const DateObj = new Date();
        let dateTime = `${DateObj.getFullYear()}-${DateObj.getMonth()}-${DateObj.getDate()}` 
            +
            ` ${DateObj.getHours()}:${DateObj.getMinutes()}:${DateObj.getSeconds()} ${DateObj.getMilliseconds()}`;
            
        console.log(`%c${msg} - [${dateTime}]`, 'background: #222; color: #fff; font-size: 150%;');
    }
}

export default new Logger;