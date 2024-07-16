import React, { useState } from 'react';
import axios from 'axios';

interface LeetCodeStats {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: string;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  submissionCalendar: object;
}

const Scraper: React.FC = () => {
  const [data, setData] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const scrapeData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://leetcode-stats-api.herokuapp.com/kimjiwook129');
      setData(response.data);
    } catch (error) {
      console.error('Error scraping data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={scrapeData} disabled={loading}>
        {loading ? 'Scraping...' : 'Scrape Data'}
      </button>
      {data && (
        <div>
          <h2>LeetCode Stats</h2>
          <p>Status: {data.status}</p>
          <p>Message: {data.message}</p>
          <p>Total Solved: {data.totalSolved} / {data.totalQuestions}</p>
          <p>Easy Solved: {data.easySolved} / {data.totalEasy}</p>
          <p>Medium Solved: {data.mediumSolved} / {data.totalMedium}</p>
          <p>Hard Solved: {data.hardSolved} / {data.totalHard}</p>
          <p>Acceptance Rate: {data.acceptanceRate}</p>
          <p>Ranking: {data.ranking}</p>
          <p>Contribution Points: {data.contributionPoints}</p>
          <p>Reputation: {data.reputation}</p>
          <h3>Submission Calendar</h3>
          <pre>{JSON.stringify(data.submissionCalendar, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Scraper;