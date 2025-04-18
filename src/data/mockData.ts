
export interface AnalyticsRecord {
  interactionId: string;
  interactionType: string;
  offensesList: string[];
  officerId: string;
  personId: string;
  disclosureAccepted: boolean;
  disclosureNotAcceptedReason: string | null;
  firstDownloadTime: string;
  completedTime: string;
  durationForCompletion: number;
  reviewOutputDwellTime: number;
  recordingsLog: {
    recordingStartTime: string;
    recordingEndTime: string;
    recordingDuration: number;
  }[];
  totalRecordingDuration: number;
  sessionRevisits: {
    username: string;
    sessionViewTime: string;
  }[];
  userFeedback: {
    timeWithoutAnathem: number;
    timeSaved: number;
    timeLossReason: string | null;
    overallSatisfaction: string;
    comments: string;
    additionalFeedback: Record<string, any>;
  }[];
  evaluationStatistics: {
    averageSummaryAccuracy: number;
    averageAssessmentAccuracy: number;
    averageTranscriptionAccuracy: number;
  };
  outputAnalytics: {
    outputId: string;
    generationName: string;
    generationStartTime: string;
    outputTimestamp: string;
    status: string;
    outputType: string;
    configVersion: string;
    llmModel: string;
    generationResponseTime: number;
    retryLog: any[];
    accuracyScore: number;
    savedTextSimilarity: number;
    editCount: number;
    promptTokenCount: number;
    completionTokenCount: number;
    cachedTokenCount: number;
    tokenCost: number;
    userRating: number;
    comments: string;
    tags: string[];
  }[];
}

export const mockAnalyticsData: AnalyticsRecord[] = [
  {
    interactionId: "96900786-5c09-4340-a940-fd383ecd763c",
    interactionType: "witnessInterview",
    offensesList: ["theft", "burglary"],
    officerId: "9ccdc9ff-8869-4042-b4db-c71544eee7ed",
    personId: "24dcfa08-ce11-44fb-86b6-5b2ee16b0edd",
    disclosureAccepted: true,
    disclosureNotAcceptedReason: null,
    firstDownloadTime: "2023-04-01T10:05:00Z",
    completedTime: "2023-04-01T11:00:00Z",
    durationForCompletion: 3300,
    reviewOutputDwellTime: 3000,
    recordingsLog: [
      {
        recordingStartTime: "2023-04-01T10:00:00Z",
        recordingEndTime: "2023-04-01T10:30:00Z",
        recordingDuration: 1800
      }
    ],
    totalRecordingDuration: 1800,
    sessionRevisits: [
      {
        username: "jdoe",
        sessionViewTime: "2023-04-01T10:15:00Z"
      }
    ],
    userFeedback: [
      {
        timeWithoutAnathem: 1800,
        timeSaved: 1800,
        timeLossReason: null,
        overallSatisfaction: "Satisfied",
        comments: "Great tool!",
        additionalFeedback: {}
      }
    ],
    evaluationStatistics: {
      averageSummaryAccuracy: 0.95,
      averageAssessmentAccuracy: 0.92,
      averageTranscriptionAccuracy: 0.98
    },
    outputAnalytics: [
      {
        outputId: "96900786-5c09-4340-a940-fd383ecd763c",
        generationName: "brief_summaries",
        generationStartTime: "2023-04-01T11:05:00Z",
        outputTimestamp: "2023-04-01T11:05:02Z",
        status: "completed",
        outputType: "summary",
        configVersion: "v1.2",
        llmModel: "gpt-4-32k",
        generationResponseTime: 2500,
        retryLog: [],
        accuracyScore: 0.85,
        savedTextSimilarity: 0.85,
        editCount: 2,
        promptTokenCount: 200,
        completionTokenCount: 300,
        cachedTokenCount: 0,
        tokenCost: 0.02,
        userRating: 4,
        comments: "Accurate summary",
        tags: ["police", "summary"]
      }
    ]
  }
];

export const mockChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  data: [20, 80, 45, 30, 60, 40]
};

// Aggregate data for interactions
export const interactionTypes = [
  { type: "Theft", count: 289, change: -1 },
  { type: "Domestic Violence and Assault", count: 120, change: 12 },
  { type: "Sexual Offences", count: 111, change: 0 }
];

// Metrics
export const metrics = {
  timeSaved: {
    value: "2.1 hrs",
    change: "+2.1%"
  },
  monthlyTimeSaved: {
    value: "321 hrs",
    change: "-1%"
  },
  sessionsPerUser: {
    value: "12",
    change: "-4.1%"
  },
  generationTime: {
    value: "132 mins",
    change: "Same"
  },
  contentAccuracy: 4,
  officerSatisfaction: "Very happy",
  editPercentage: "41%",
  reviewTime: "17 mins"
};
