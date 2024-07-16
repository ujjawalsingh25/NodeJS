// _____  express-status-monitor  ____
//  -->> know the status of the server (i.e memory, performace, ...).

// The files renders as it first goes to RAM memory and then it renders.
// So when multiple user uses the RAM it leads to Crash.
// So we use Stream because of which we make the "fs" to stream the data
// The "fs" apart from reading the data it takes the data in "CHUNKS" (small packages) 
// and "STREAM" to site. 