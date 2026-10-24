/*
 * CST370 Homework 6-1
 * Title: Maximum Coins on a Grid (Dynamic Programming)
 * Abstract: Reads an n x m board of 0/1 values (coins) and computes the maximum number of coins
 *           collectible when moving only right or down from (1,1) to (n,m). It also reconstructs
 *           one optimal path; when multiple optimal choices exist during backtracking, it prefers
 *           moving from the left cell over the top cell.
 * Name: Xavier Mendoza
 * Date: 02/23/2026
 *
 * INSTRUCTION:
 *     This is a Java staring code for hw6_1.
 *     When you finish the development, download this file and and submit to Canvas
 *     according to the submission instructions.
 *
 *     Please DO NOT change the name of the main class "Main"
 */

import java.util.*;

class Main
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);

        if (!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int m = sc.nextInt();

        int[][] coin = new int[n][m];
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < m; j++)
            {
                if (sc.hasNextInt()) coin[i][j] = sc.nextInt();
                else coin[i][j] = 0;
            }
        }

        int[][] dp = new int[n][m];

        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < m; j++)
            {
                int bestPrev = 0;
                if (i == 0 && j == 0)
                {
                    bestPrev = 0;
                }
                else if (i == 0)
                {
                    bestPrev = dp[i][j - 1];
                }
                else if (j == 0)
                {
                    bestPrev = dp[i - 1][j];
                }
                else
                {
                    bestPrev = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
                dp[i][j] = bestPrev + coin[i][j];
            }
        }

        int maxCoins = dp[n - 1][m - 1];

        List<int[]> path = new ArrayList<>();
        int i = n - 1;
        int j = m - 1;
        while (true)
        {
            path.add(new int[]{i + 1, j + 1}); // 1-based output
            if (i == 0 && j == 0) break;

            if (i == 0)
            {
                j--;
            }
            else if (j == 0)
            {
                i--;
            }
            else
            {
                // Prefer coming from the left if tie
                if (dp[i][j - 1] >= dp[i - 1][j])
                {
                    j--;
                }
                else
                {
                    i--;
                }
            }
        }

        Collections.reverse(path);

        System.out.println("Max coins:" + maxCoins);

        StringBuilder sb = new StringBuilder();
        sb.append("Path:");
        for (int idx = 0; idx < path.size(); idx++)
        {
            int[] cell = path.get(idx);
            sb.append("(").append(cell[0]).append(",").append(cell[1]).append(")");
            if (idx != path.size() - 1) sb.append("->");
        }
        System.out.println(sb.toString());
    }
}