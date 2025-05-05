
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
    <Card className={`w-full mt-6 overflow-hidden ${isDarkMode 
      ? "bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50" 
      : "bg-gradient-to-br from-white/90 to-gray-50/90 border-2 border-gray-100/50 shadow-lg"} animate-fade-in backdrop-blur-sm`}
    >
      <CardHeader className={`flex flex-row justify-between items-center pb-2 border-b ${isDarkMode ? "border-gray-700/50" : "border-gray-200/50"}`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-full ${score >= 80 
            ? (isDarkMode ? "bg-green-900/30" : "bg-green-100") 
            : score >= 60 
              ? (isDarkMode ? "bg-amber-900/30" : "bg-amber-100")
              : (isDarkMode ? "bg-red-900/30" : "bg-red-100")}`}>
            <Star className={`h-5 w-5 ${
              score >= 80 
                ? (isDarkMode ? "text-green-400" : "text-green-600") 
                : score >= 60 
                  ? (isDarkMode ? "text-amber-400" : "text-amber-600")
                  : (isDarkMode ? "text-red-400" : "text-red-600")
            }`} />
          </div>
          <h3 className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Your Resume Score
          </h3>
        </div>
        <div className={`inline-flex items-center justify-center ${getScoreBgColor(score)} rounded-xl px-5 py-3 font-bold text-2xl border ${getBorderColor(score)}`}>
          {score}%
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6 p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-5">
            {/* Keyword Match */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-sm font-medium flex items-center gap-1.5 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <div className={`w-2 h-2 rounded-full ${getScoreColor(metrics.keywordMatch)}`}></div>
                  Keyword Match
                </span>
                <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {metrics.keywordMatch}%
                </span>
              </div>
              <div className={`h-2.5 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full overflow-hidden`}>
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
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-sm font-medium flex items-center gap-1.5 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <div className={`w-2 h-2 rounded-full ${getScoreColor(metrics.formatCompliance)}`}></div>
                  Format Compliance
                </span>
                <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {metrics.formatCompliance}%
                </span>
              </div>
              <div className={`h-2.5 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full overflow-hidden`}>
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
          </div>

          <div className="space-y-5">
            {/* Experience Match */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-sm font-medium flex items-center gap-1.5 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <div className={`w-2 h-2 rounded-full ${getScoreColor(metrics.experienceMatch)}`}></div>
                  Experience Match
                </span>
                <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {metrics.experienceMatch}%
                </span>
              </div>
              <div className={`h-2.5 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full overflow-hidden`}>
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
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-sm font-medium flex items-center gap-1.5 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <div className={`w-2 h-2 rounded-full ${getScoreColor(metrics.skillsRelevance)}`}></div>
                  Skills Relevance
                </span>
                <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {metrics.skillsRelevance}%
                </span>
              </div>
              <div className={`h-2.5 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full overflow-hidden`}>
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
        </div>

        {/* Suggested Improvements - Now showing ALL suggestions without the "more suggestions" text */}
        <div className={`p-4 rounded-xl border ${isDarkMode 
          ? "bg-amber-900/20 border-amber-800/50" 
          : "bg-amber-50 border-amber-200"}`}
        >
          <h4 className={`font-medium text-sm mb-2 flex items-center gap-2 ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>
            <AlertTriangle className="h-4 w-4" />
            Top Improvement Suggestions
          </h4>
          <ul className="mt-2 space-y-2 pl-2">
            {improvementSuggestions.map((suggestion, idx) => (
              <li key={idx} className={`text-xs flex items-start gap-2 ${isDarkMode ? "text-amber-200" : "text-amber-700"}`}>
                <span className="mr-1 mt-1">•</span>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
