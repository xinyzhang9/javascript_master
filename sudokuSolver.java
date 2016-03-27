public class Solution {
    public void solveSudoku(char[][] board) {
        solve(board);
    }
    
    private boolean solve(char[][] board){
        for(int i = 0; i < 9; i++){
            for(int j = 0; j < 9; j++){
                if(board[i][j] != '.'){
                    continue;
                }
                for(int k = 1; k<= 9; k++){
                    board[i][j] = (char)(k+'0');
                    if(isValid(board,i,j) && solve(board)){
                        return true;
                    }
                    board[i][j] = '.';
                }
                return false;
                
            }
        }
        return true;
    }
    
    private boolean isValid(char[][] board,int a,int b){
        Set<Character> contained = new HashSet<Character>();
        for(int i = 0; i <9; i++){
            if(contained.contains(board[a][i])){
                return false;
            }
            if(board[a][i] <= '9' && board[a][i] > '0'){
                contained.add(board[a][i]);
            }
        }
        
        contained = new HashSet<Character>();
        for(int i = 0; i <9; i++){
            if(contained.contains(board[i][b])){
                return false;
            }
            if(board[i][b] <= '9' && board[i][b] > '0'){
                contained.add(board[i][b]);
            }
        }
        
        contained = new HashSet<Character>();
        for(int m = 0; m < 3; m++){
            for(int n = 0; n < 3; n++){
                int x = 3*(a/3)+m;
                int y = 3*(b/3)+n;
                if(contained.contains(board[x][y])){
                    return false;
                }
                if(board[x][y] <= '9' && board[x][y] > '0'){
                    contained.add(board[x][y]);
                }
                
            }
        }
        return true;
    }
}