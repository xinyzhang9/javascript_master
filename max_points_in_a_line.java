// Max Points on a Line
// Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.
// Given 4 points: (1,2), (3,6), (0,0), (1,3).

// The maximum number is 3.

/**
 * Definition for a point.
 * class Point {
 *     int x;
 *     int y;
 *     Point() { x = 0; y = 0; }
 *     Point(int a, int b) { x = a; y = b; }
 * }
 */
public class Solution {
    /**
     * @param points an array of point
     * @return an integer
     */
    public int maxPoints(Point[] points) {
        // Write your code here
        if(points == null || points.length == 0)
            return 0;
        int max = 1;
        HashMap<Double,Integer> map = new HashMap<Double,Integer>();
        for(int i = 0; i < points.length; i++){
            map.clear();
            map.put((double)Integer.MIN_VALUE,1);
            int dup = 0;
            for(int j = i+1; j < points.length; j++){
                if(points[j].x == points[i].x && points[j].y == points[i].y){
                    dup++;
                    continue;
                }
                double key = points[j].x == points[i].x?(double)Integer.MAX_VALUE:0.0+(double)(points[j].y-points[i].y)/(double)(points[j].x-points[i].x);
                if(map.containsKey(key)){
                    map.put(key,map.get(key)+1);
                }else{
                    map.put(key,2);
                }
                
            }
            for(int val:map.values()){
                if(val+dup > max){
                    max = val + dup;
                }
            }
        }
        return max;
    }
}