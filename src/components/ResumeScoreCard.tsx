
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

interface ResumeScoreCardProps {
  score: number;
  metrics?: {
    keywordMatch: number;
    formatCompliance: number;
    experienceMatch: number;
    skillsRelevance: number;
  };
  improvementSuggestions: string[];
}

export function ResumeScoreCard({
  score,
  metrics = {
    keywordMatch: 0,
    formatCompliance: 0,
    experienceMatch: 0,
    skillsRelevance: 0,
  },
  improvementSuggestions,
}: ResumeScoreCardProps) {
  const getScoreColor = (value: number) => {
    if (value >= 80) return "bg-green-500";
    if (value >= 60) return "bg-amber-500";
    return "bg-red-500";
  };

  const getScoreBgColor = (value: number) => {
    if (value >= 80) return "bg-green-100 text-green-700";
    if (value >= 60) return "bg-amber-100 text-amber-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <Card className="w-full mt-8 border-2 border-gray-100 overflow-hidden">
      <CardHeader className="bg-white pb-2 flex flex-row justify-between items-center">
        <div>
          <h3 className="font-semibold text-lg">Your Resume Score</h3>
        </div>
        <div className={`inline-flex items-center justify-center ${getScoreBgColor(score)} rounded-full h-16 w-16 font-bold text-xl`}>
          {score}%
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-4">
        <div className="space-y-4">
          {/* Keyword Match */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Keyword Match</span>
              <span className="text-sm font-medium">{metrics.keywordMatch}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getScoreColor(metrics.keywordMatch)} rounded-full`} 
                style={{ width: `${metrics.keywordMatch}%` }}
              ></div>
            </div>
          </div>

          {/* Format Compliance */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Format Compliance</span>
              <span className="text-sm font-medium">{metrics.formatCompliance}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getScoreColor(metrics.formatCompliance)} rounded-full`} 
                style={{ width: `${metrics.formatCompliance}%` }}
              ></div>
            </div>
          </div>

          {/* Experience Match */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Experience Match</span>
              <span className="text-sm font-medium">{metrics.experienceMatch}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getScoreColor(metrics.experienceMatch)} rounded-full`} 
                style={{ width: `${metrics.experienceMatch}%` }}
              ></div>
            </div>
          </div>

          {/* Skills Relevance */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Skills Relevance</span>
              <span className="text-sm font-medium">{metrics.skillsRelevance}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getScoreColor(metrics.skillsRelevance)} rounded-full`} 
                style={{ width: `${metrics.skillsRelevance}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Suggested Improvements */}
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <h4 className="font-medium text-amber-800 text-sm">Suggested Improvements</h4>
          <ul className="mt-2 space-y-1">
            {improvementSuggestions.slice(0, 5).map((suggestion, idx) => (
              <li key={idx} className="text-xs text-amber-700 flex items-start gap-2">
                <span className="mr-1">•</span>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
