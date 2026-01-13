function extractHeartRate(logs) {
    const lowerLogs = logs.trim().toLowerCase();
    const regex = /heartrate\s*=\s*(\d+)/g;
    const results = [];
    let match;
    while ((match = regex.exec(lowerLogs)) !== null) {
        results.push(Number(match[1]));
    }
    return results;
}

// simple test
if (require.main === module) {
    const input = "LOG_01: HeartRate=72bpm; STATUS=OK | LOG_02: heartrate= 85 ; STATUS=WARN | LOG_03:HEARTRATE=error; STATUS=FAIL";
    console.log("Extracted HeartRates:", extractHeartRate(input));
}

