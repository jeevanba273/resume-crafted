
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AlertTriangle, Star } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "@/App";

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
  const { isDarkMode } = useContext(ThemeContext);

  const getScoreColor = (value: number) => {
    if (value >= 80) return isDarkMode ? "bg-green-600" : "bg-green-500";
    if (value >= 60) return isDarkMode ? "bg-amber-600" : "bg-amber-500";
    return isDarkMode ? "bg-red-600" : "bg-red-500";
  };

  const getScoreBgColor = (value: number) => {
    if (value >= 80) return isDarkMode 
      ? "bg-green-900/30 text-green-400 border-green-700/50" 
      : "bg-green-100 text-green-700";
    if (value >= 60) return isDarkMode 
      ? "bg-amber-900/30 text-amber-400 border-amber-700/50" 
      : "bg-amber-100 text-amber-700";
    return isDarkMode 
      ? "bg-red-900/30 text-red-400 border-red-700/50" 
      : "bg-red-100 text-red-700";
  };

  const getBorderColor = (value: number) => {
    if (value >= 80) return isDarkMode ? "border-green-700/50" : "border-green-200";
    if (value >= 60) return isDarkMode ? "border-amber-700/50" : "border-amber-200";
    return isDarkMode ? "border-red-700/50" : "border-red-200";
  };

  return (
    <Card className={`w-full mt-8 ${isDarkMode 
      ? "border border-gray-700 bg-gray-800/50 backdrop-blur-sm" 
      : "border-2 border-gray-100 bg-white/80"} overflow-hidden animate-fade-in`}
    >
      <CardHeader className={`${isDarkMode ? "bg-gray-800/70" : "bg-white"} pb-2 flex flex-row justify-between items-center border-b ${isDarkMode ? "border-gray-700" : "border-gray-100"}`}>
        <div>
          <h3 className={`font-semibold text-lg flex items-center gap-2 ${isDarkMode ? "text-white" : ""}`}>
            <Star className={`h-5 w-5 ${score >= 80 ? "text-yellow-500" : score >= 60 ? "text-amber-500" : "text-gray-400"}`} />
            Your Resume Score
          </h3>
        </div>
        <div className={`inline-flex items-center justify-center ${getScoreBgColor(score)} rounded-full h-16 w-16 font-bold text-xl border ${getBorderColor(score)}`}>
          {score}%
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-4">
          {/* Keyword Match */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : ""}`}>Keyword Match</span>
              <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : ""}`}>{metrics.keywordMatch}%</span>
            </div>
            <div className={`h-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full overflow-hidden`}>
              <div 
                className={`h-full ${getScoreColor(metrics.keywordMatch)} rounded-full relative overflow-hidden`} 
                style={{ width: `${metrics.keywordMatch}%` }}
              >
                {metrics.keywordMatch > 70 && (
                  <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                )}
              </div>
            </div>
          </div>

          {/* Format Compliance */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : ""}`}>Format Compliance</span>
              <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : ""}`}>{metrics.formatCompliance}%</span>
            </div>
            <div className={`h-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full overflow-hidden`}>
              <div 
                className={`h-full ${getScoreColor(metrics.formatCompliance)} rounded-full relative overflow-hidden`} 
                style={{ width: `${metrics.formatCompliance}%` }}
              >
                {metrics.formatCompliance > 70 && (
                  <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                )}
              </div>
            </div>
          </div>

          {/* Experience Match */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : ""}`}>Experience Match</span>
              <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : ""}`}>{metrics.experienceMatch}%</span>
            </div>
            <div className={`h-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full overflow-hidden`}>
              <div 
                className={`h-full ${getScoreColor(metrics.experienceMatch)} rounded-full relative overflow-hidden`} 
                style={{ width: `${metrics.experienceMatch}%` }}
              >
                {metrics.experienceMatch > 70 && (
                  <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                )}
              </div>
            </div>
          </div>

          {/* Skills Relevance */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : ""}`}>Skills Relevance</span>
              <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : ""}`}>{metrics.skillsRelevance}%</span>
            </div>
            <div className={`h-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full overflow-hidden`}>
              <div 
                className={`h-full ${getScoreColor(metrics.skillsRelevance)} rounded-full relative overflow-hidden`} 
                style={{ width: `${metrics.skillsRelevance}%` }}
              >
                {metrics.skillsRelevance > 70 && (
                  <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Improvements */}
        <div className={`p-4 rounded-lg border ${isDarkMode 
          ? "bg-amber-900/20 border-amber-800/50" 
          : "bg-amber-50 border-amber-200"}`}
        >
          <h4 className={`font-medium text-sm ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>
            Suggested Improvements
          </h4>
          <ul className="mt-2 space-y-2">
            {improvementSuggestions.slice(0, 3).map((suggestion, idx) => (
              <li key={idx} className={`text-xs flex items-start gap-2 ${isDarkMode ? "text-amber-200" : "text-amber-700"}`}>
                <span className="mr-1">•</span>
                <span>{suggestion}</span>
              </li>
            ))}
            {improvementSuggestions.length > 3 && (
              <li className={`text-xs italic ${isDarkMode ? "text-amber-300/70" : "text-amber-600"}`}>
                + {improvementSuggestions.length - 3} more suggestions...
              </li>
            )}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
