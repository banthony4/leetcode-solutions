/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let rooms = 0, j = 0;
    const starts = intervals.map(a => a[0]).sort((a, b) => a-b);
    const ends = intervals.map(a => a[1]).sort((a, b) => a-b);
    
    for(let i = 0; i < starts.length; i++){
        if(starts[i] >= ends[j]){
            rooms--;
            j++;
        }
        rooms++
    }
    
    return rooms;
};