export const ApplicationSharingPolicy = {
    Personal: "Personal",
    Shared: "Shared",
} as const;

export type ApplicationSharingPolicy = (typeof ApplicationSharingPolicy)[keyof typeof ApplicationSharingPolicy];

export const AutoDeleteCondition = {
    CreatedGreaterThan: "CreatedGreaterThan",
    LastAccessedGreaterThan: "LastAccessedGreaterThan",
} as const;

export type AutoDeleteCondition = (typeof AutoDeleteCondition)[keyof typeof AutoDeleteCondition];

export const AutoRebuildSetting = {
    Disabled: "Disabled",
    OnBaseImageUpdate: "OnBaseImageUpdate",
} as const;

export type AutoRebuildSetting = (typeof AutoRebuildSetting)[keyof typeof AutoRebuildSetting];

export const BatchLoggingLevel = {
    Info: "Info",
    Warning: "Warning",
    Debug: "Debug",
} as const;

export type BatchLoggingLevel = (typeof BatchLoggingLevel)[keyof typeof BatchLoggingLevel];

export const BatchOutputAction = {
    SummaryOnly: "SummaryOnly",
    AppendRow: "AppendRow",
} as const;

export type BatchOutputAction = (typeof BatchOutputAction)[keyof typeof BatchOutputAction];

export const BlockedTransformers = {
    /**
     * Target encoding for text data.
     */
    TextTargetEncoder: "TextTargetEncoder",
    /**
     * Ohe hot encoding creates a binary feature transformation.
     */
    OneHotEncoder: "OneHotEncoder",
    /**
     * Target encoding for categorical data.
     */
    CatTargetEncoder: "CatTargetEncoder",
    /**
     * Tf-Idf stands for, term-frequency times inverse document-frequency. This is a common term weighting scheme for identifying information from documents.
     */
    TfIdf: "TfIdf",
    /**
     * Weight of Evidence encoding is a technique used to encode categorical variables. It uses the natural log of the P(1)/P(0) to create weights.
     */
    WoETargetEncoder: "WoETargetEncoder",
    /**
     * Label encoder converts labels/categorical variables in a numerical form.
     */
    LabelEncoder: "LabelEncoder",
    /**
     * Word embedding helps represents words or phrases as a vector, or a series of numbers.
     */
    WordEmbedding: "WordEmbedding",
    /**
     * Naive Bayes is a classified that is used for classification of discrete features that are categorically distributed.
     */
    NaiveBayes: "NaiveBayes",
    /**
     * Count Vectorizer converts a collection of text documents to a matrix of token counts.
     */
    CountVectorizer: "CountVectorizer",
    /**
     * Hashing One Hot Encoder can turn categorical variables into a limited number of new features. This is often used for high-cardinality categorical features.
     */
    HashOneHotEncoder: "HashOneHotEncoder",
} as const;

export type BlockedTransformers = (typeof BlockedTransformers)[keyof typeof BlockedTransformers];

export const ClassificationModels = {
    /**
     * Logistic regression is a fundamental classification technique.
     * It belongs to the group of linear classifiers and is somewhat similar to polynomial and linear regression.
     * Logistic regression is fast and relatively uncomplicated, and it's convenient for you to interpret the results.
     * Although it's essentially a method for binary classification, it can also be applied to multiclass problems.
     */
    LogisticRegression: "LogisticRegression",
    /**
     * SGD: Stochastic gradient descent is an optimization algorithm often used in machine learning applications
     * to find the model parameters that correspond to the best fit between predicted and actual outputs.
     */
    SGD: "SGD",
    /**
     * The multinomial Naive Bayes classifier is suitable for classification with discrete features (e.g., word counts for text classification).
     * The multinomial distribution normally requires integer feature counts. However, in practice, fractional counts such as tf-idf may also work.
     */
    MultinomialNaiveBayes: "MultinomialNaiveBayes",
    /**
     * Naive Bayes classifier for multivariate Bernoulli models.
     */
    BernoulliNaiveBayes: "BernoulliNaiveBayes",
    /**
     * A support vector machine (SVM) is a supervised machine learning model that uses classification algorithms for two-group classification problems.
     * After giving an SVM model sets of labeled training data for each category, they're able to categorize new text.
     */
    SVM: "SVM",
    /**
     * A support vector machine (SVM) is a supervised machine learning model that uses classification algorithms for two-group classification problems.
     * After giving an SVM model sets of labeled training data for each category, they're able to categorize new text.
     * Linear SVM performs best when input data is linear, i.e., data can be easily classified by drawing the straight line between classified values on a plotted graph.
     */
    LinearSVM: "LinearSVM",
    /**
     * K-nearest neighbors (KNN) algorithm uses 'feature similarity' to predict the values of new datapoints
     * which further means that the new data point will be assigned a value based on how closely it matches the points in the training set.
     */
    KNN: "KNN",
    /**
     * Decision Trees are a non-parametric supervised learning method used for both classification and regression tasks.
     * The goal is to create a model that predicts the value of a target variable by learning simple decision rules inferred from the data features.
     */
    DecisionTree: "DecisionTree",
    /**
     * Random forest is a supervised learning algorithm.
     * The "forest" it builds, is an ensemble of decision trees, usually trained with the “bagging” method.
     * The general idea of the bagging method is that a combination of learning models increases the overall result.
     */
    RandomForest: "RandomForest",
    /**
     * Extreme Trees is an ensemble machine learning algorithm that combines the predictions from many decision trees. It is related to the widely used random forest algorithm.
     */
    ExtremeRandomTrees: "ExtremeRandomTrees",
    /**
     * LightGBM is a gradient boosting framework that uses tree based learning algorithms.
     */
    LightGBM: "LightGBM",
    /**
     * The technique of transiting week learners into a strong learner is called Boosting. The gradient boosting algorithm process works on this theory of execution.
     */
    GradientBoosting: "GradientBoosting",
    /**
     * XGBoost: Extreme Gradient Boosting Algorithm. This algorithm is used for structured data where target column values can be divided into distinct class values.
     */
    XGBoostClassifier: "XGBoostClassifier",
} as const;

export type ClassificationModels = (typeof ClassificationModels)[keyof typeof ClassificationModels];

export const ClassificationMultilabelPrimaryMetrics = {
    /**
     * AUC is the Area under the curve.
     * This metric represents arithmetic mean of the score for each class,
     * weighted by the number of true instances in each class.
     */
    AUCWeighted: "AUCWeighted",
    /**
     * Accuracy is the ratio of predictions that exactly match the true class labels.
     */
    Accuracy: "Accuracy",
    /**
     * Normalized macro recall is recall macro-averaged and normalized, so that random
     * performance has a score of 0, and perfect performance has a score of 1.
     */
    NormMacroRecall: "NormMacroRecall",
    /**
     * The arithmetic mean of the average precision score for each class, weighted by
     * the number of true instances in each class.
     */
    AveragePrecisionScoreWeighted: "AveragePrecisionScoreWeighted",
    /**
     * The arithmetic mean of precision for each class, weighted by number of true instances in each class.
     */
    PrecisionScoreWeighted: "PrecisionScoreWeighted",
    /**
     * Intersection Over Union. Intersection of predictions divided by union of predictions.
     */
    IOU: "IOU",
} as const;

export type ClassificationMultilabelPrimaryMetrics = (typeof ClassificationMultilabelPrimaryMetrics)[keyof typeof ClassificationMultilabelPrimaryMetrics];

export const ClassificationPrimaryMetrics = {
    /**
     * AUC is the Area under the curve.
     * This metric represents arithmetic mean of the score for each class,
     * weighted by the number of true instances in each class.
     */
    AUCWeighted: "AUCWeighted",
    /**
     * Accuracy is the ratio of predictions that exactly match the true class labels.
     */
    Accuracy: "Accuracy",
    /**
     * Normalized macro recall is recall macro-averaged and normalized, so that random
     * performance has a score of 0, and perfect performance has a score of 1.
     */
    NormMacroRecall: "NormMacroRecall",
    /**
     * The arithmetic mean of the average precision score for each class, weighted by
     * the number of true instances in each class.
     */
    AveragePrecisionScoreWeighted: "AveragePrecisionScoreWeighted",
    /**
     * The arithmetic mean of precision for each class, weighted by number of true instances in each class.
     */
    PrecisionScoreWeighted: "PrecisionScoreWeighted",
} as const;

export type ClassificationPrimaryMetrics = (typeof ClassificationPrimaryMetrics)[keyof typeof ClassificationPrimaryMetrics];

export const ClusterPurpose = {
    FastProd: "FastProd",
    DenseProd: "DenseProd",
    DevTest: "DevTest",
} as const;

export type ClusterPurpose = (typeof ClusterPurpose)[keyof typeof ClusterPurpose];

export const ComputeInstanceAuthorizationType = {
    Personal: "personal",
} as const;

export type ComputeInstanceAuthorizationType = (typeof ComputeInstanceAuthorizationType)[keyof typeof ComputeInstanceAuthorizationType];

export const ComputePowerAction = {
    Start: "Start",
    Stop: "Stop",
} as const;

export type ComputePowerAction = (typeof ComputePowerAction)[keyof typeof ComputePowerAction];

export const ComputeType = {
    AKS: "AKS",
    Kubernetes: "Kubernetes",
    AmlCompute: "AmlCompute",
    ComputeInstance: "ComputeInstance",
    DataFactory: "DataFactory",
    VirtualMachine: "VirtualMachine",
    HDInsight: "HDInsight",
    Databricks: "Databricks",
    DataLakeAnalytics: "DataLakeAnalytics",
    SynapseSpark: "SynapseSpark",
} as const;

export type ComputeType = (typeof ComputeType)[keyof typeof ComputeType];

export const ConnectionAuthType = {
    PAT: "PAT",
    ManagedIdentity: "ManagedIdentity",
    UsernamePassword: "UsernamePassword",
    None: "None",
    SAS: "SAS",
} as const;

export type ConnectionAuthType = (typeof ConnectionAuthType)[keyof typeof ConnectionAuthType];

export const ConnectionCategory = {
    PythonFeed: "PythonFeed",
    ContainerRegistry: "ContainerRegistry",
    Git: "Git",
} as const;

export type ConnectionCategory = (typeof ConnectionCategory)[keyof typeof ConnectionCategory];

export const ContainerType = {
    StorageInitializer: "StorageInitializer",
    InferenceServer: "InferenceServer",
} as const;

export type ContainerType = (typeof ContainerType)[keyof typeof ContainerType];

export const CredentialsType = {
    AccountKey: "AccountKey",
    Certificate: "Certificate",
    None: "None",
    Sas: "Sas",
    ServicePrincipal: "ServicePrincipal",
} as const;

export type CredentialsType = (typeof CredentialsType)[keyof typeof CredentialsType];

export const DataType = {
    Uri_file: "uri_file",
    Uri_folder: "uri_folder",
    Mltable: "mltable",
} as const;

export type DataType = (typeof DataType)[keyof typeof DataType];

export const DatasetType = {
    Tabular: "tabular",
    File: "file",
} as const;

export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType];

export const DatastoreType = {
    AzureBlob: "AzureBlob",
    AzureDataLakeGen1: "AzureDataLakeGen1",
    AzureDataLakeGen2: "AzureDataLakeGen2",
    AzureFile: "AzureFile",
} as const;

export type DatastoreType = (typeof DatastoreType)[keyof typeof DatastoreType];

export const DatastoreTypeArm = {
    Blob: "blob",
    Adls: "adls",
    Adls_gen2: "adls-gen2",
    Dbfs: "dbfs",
    File: "file",
    Mysqldb: "mysqldb",
    Sqldb: "sqldb",
    Psqldb: "psqldb",
} as const;

export type DatastoreTypeArm = (typeof DatastoreTypeArm)[keyof typeof DatastoreTypeArm];

export const DistributionType = {
    PyTorch: "PyTorch",
    TensorFlow: "TensorFlow",
    Mpi: "Mpi",
} as const;

export type DistributionType = (typeof DistributionType)[keyof typeof DistributionType];

export const DockerSpecificationType = {
    Build: "Build",
    Image: "Image",
} as const;

export type DockerSpecificationType = (typeof DockerSpecificationType)[keyof typeof DockerSpecificationType];

export const EarlyTerminationPolicyType = {
    Bandit: "Bandit",
    MedianStopping: "MedianStopping",
    TruncationSelection: "TruncationSelection",
} as const;

export type EarlyTerminationPolicyType = (typeof EarlyTerminationPolicyType)[keyof typeof EarlyTerminationPolicyType];

export const EgressPublicNetworkAccessType = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type EgressPublicNetworkAccessType = (typeof EgressPublicNetworkAccessType)[keyof typeof EgressPublicNetworkAccessType];

export const EmailNotificationEnableType = {
    JobCompleted: "JobCompleted",
    JobFailed: "JobFailed",
    JobCancelled: "JobCancelled",
} as const;

export type EmailNotificationEnableType = (typeof EmailNotificationEnableType)[keyof typeof EmailNotificationEnableType];

export const EncryptionStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type EncryptionStatus = (typeof EncryptionStatus)[keyof typeof EncryptionStatus];

export const EndpointAuthMode = {
    AMLToken: "AMLToken",
    Key: "Key",
    AADToken: "AADToken",
} as const;

export type EndpointAuthMode = (typeof EndpointAuthMode)[keyof typeof EndpointAuthMode];

export const EndpointComputeType = {
    Managed: "Managed",
    Kubernetes: "Kubernetes",
    AzureMLCompute: "AzureMLCompute",
} as const;

export type EndpointComputeType = (typeof EndpointComputeType)[keyof typeof EndpointComputeType];

export const EndpointServiceConnectionStatus = {
    Approved: "Approved",
    Pending: "Pending",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type EndpointServiceConnectionStatus = (typeof EndpointServiceConnectionStatus)[keyof typeof EndpointServiceConnectionStatus];

export const EnvironmentVariableType = {
    Local: "local",
} as const;

export type EnvironmentVariableType = (typeof EnvironmentVariableType)[keyof typeof EnvironmentVariableType];

export const FeatureDataType = {
    String: "String",
    Integer: "Integer",
    Long: "Long",
    Float: "Float",
    Double: "Double",
    Binary: "Binary",
    Datetime: "Datetime",
    Boolean: "Boolean",
} as const;

export type FeatureDataType = (typeof FeatureDataType)[keyof typeof FeatureDataType];

export const FeatureLags = {
    /**
     * No feature lags generated.
     */
    None: "None",
    /**
     * System auto-generates feature lags.
     */
    Auto: "Auto",
} as const;

export type FeatureLags = (typeof FeatureLags)[keyof typeof FeatureLags];

export const FeaturizationMode = {
    /**
     * Auto mode, system performs featurization without any custom featurization inputs.
     */
    Auto: "Auto",
    /**
     * Custom featurization.
     */
    Custom: "Custom",
    /**
     * Featurization off. 'Forecasting' task cannot use this value.
     */
    Off: "Off",
} as const;

export type FeaturizationMode = (typeof FeaturizationMode)[keyof typeof FeaturizationMode];

export const ForecastHorizonMode = {
    /**
     * Forecast horizon to be determined automatically.
     */
    Auto: "Auto",
    /**
     * Use the custom forecast horizon.
     */
    Custom: "Custom",
} as const;

export type ForecastHorizonMode = (typeof ForecastHorizonMode)[keyof typeof ForecastHorizonMode];

export const ForecastingModels = {
    /**
     * Auto-Autoregressive Integrated Moving Average (ARIMA) model uses time-series data and statistical analysis to interpret the data and make future predictions.
     * This model aims to explain data by using time series data on its past values and uses linear regression to make predictions.
     */
    AutoArima: "AutoArima",
    /**
     * Prophet is a procedure for forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects.
     * It works best with time series that have strong seasonal effects and several seasons of historical data. Prophet is robust to missing data and shifts in the trend, and typically handles outliers well.
     */
    Prophet: "Prophet",
    /**
     * The Naive forecasting model makes predictions by carrying forward the latest target value for each time-series in the training data.
     */
    Naive: "Naive",
    /**
     * The Seasonal Naive forecasting model makes predictions by carrying forward the latest season of target values for each time-series in the training data.
     */
    SeasonalNaive: "SeasonalNaive",
    /**
     * The Average forecasting model makes predictions by carrying forward the average of the target values for each time-series in the training data.
     */
    Average: "Average",
    /**
     * The Seasonal Average forecasting model makes predictions by carrying forward the average value of the latest season of data for each time-series in the training data.
     */
    SeasonalAverage: "SeasonalAverage",
    /**
     * Exponential smoothing is a time series forecasting method for univariate data that can be extended to support data with a systematic trend or seasonal component.
     */
    ExponentialSmoothing: "ExponentialSmoothing",
    /**
     * An Autoregressive Integrated Moving Average with Explanatory Variable (ARIMAX) model can be viewed as a multiple regression model with one or more autoregressive (AR) terms and/or one or more moving average (MA) terms.
     * This method is suitable for forecasting when data is stationary/non stationary, and multivariate with any type of data pattern, i.e., level/trend /seasonality/cyclicity.
     */
    Arimax: "Arimax",
    /**
     * TCNForecaster: Temporal Convolutional Networks Forecaster. //TODO: Ask forecasting team for brief intro.
     */
    TCNForecaster: "TCNForecaster",
    /**
     * Elastic net is a popular type of regularized linear regression that combines two popular penalties, specifically the L1 and L2 penalty functions.
     */
    ElasticNet: "ElasticNet",
    /**
     * The technique of transiting week learners into a strong learner is called Boosting. The gradient boosting algorithm process works on this theory of execution.
     */
    GradientBoosting: "GradientBoosting",
    /**
     * Decision Trees are a non-parametric supervised learning method used for both classification and regression tasks.
     * The goal is to create a model that predicts the value of a target variable by learning simple decision rules inferred from the data features.
     */
    DecisionTree: "DecisionTree",
    /**
     * K-nearest neighbors (KNN) algorithm uses 'feature similarity' to predict the values of new datapoints
     * which further means that the new data point will be assigned a value based on how closely it matches the points in the training set.
     */
    KNN: "KNN",
    /**
     * Lasso model fit with Least Angle Regression a.k.a. Lars. It is a Linear Model trained with an L1 prior as regularizer.
     */
    LassoLars: "LassoLars",
    /**
     * SGD: Stochastic gradient descent is an optimization algorithm often used in machine learning applications
     * to find the model parameters that correspond to the best fit between predicted and actual outputs.
     * It's an inexact but powerful technique.
     */
    SGD: "SGD",
    /**
     * Random forest is a supervised learning algorithm.
     * The "forest" it builds, is an ensemble of decision trees, usually trained with the “bagging” method.
     * The general idea of the bagging method is that a combination of learning models increases the overall result.
     */
    RandomForest: "RandomForest",
    /**
     * Extreme Trees is an ensemble machine learning algorithm that combines the predictions from many decision trees. It is related to the widely used random forest algorithm.
     */
    ExtremeRandomTrees: "ExtremeRandomTrees",
    /**
     * LightGBM is a gradient boosting framework that uses tree based learning algorithms.
     */
    LightGBM: "LightGBM",
    /**
     * XGBoostRegressor: Extreme Gradient Boosting Regressor is a supervised machine learning model using ensemble of base learners.
     */
    XGBoostRegressor: "XGBoostRegressor",
} as const;

export type ForecastingModels = (typeof ForecastingModels)[keyof typeof ForecastingModels];

export const ForecastingPrimaryMetrics = {
    /**
     * The Spearman's rank coefficient of correlation is a non-parametric measure of rank correlation.
     */
    SpearmanCorrelation: "SpearmanCorrelation",
    /**
     * The Normalized Root Mean Squared Error (NRMSE) the RMSE facilitates the comparison between models with different scales.
     */
    NormalizedRootMeanSquaredError: "NormalizedRootMeanSquaredError",
    /**
     * The R2 score is one of the performance evaluation measures for forecasting-based machine learning models.
     */
    R2Score: "R2Score",
    /**
     * The Normalized Mean Absolute Error (NMAE) is a validation metric to compare the Mean Absolute Error (MAE) of (time) series with different scales.
     */
    NormalizedMeanAbsoluteError: "NormalizedMeanAbsoluteError",
} as const;

export type ForecastingPrimaryMetrics = (typeof ForecastingPrimaryMetrics)[keyof typeof ForecastingPrimaryMetrics];

export const Goal = {
    Minimize: "Minimize",
    Maximize: "Maximize",
} as const;

export type Goal = (typeof Goal)[keyof typeof Goal];

export const Header = {
    All_files_have_same_headers: "all_files_have_same_headers",
    Only_first_file_has_headers: "only_first_file_has_headers",
    No_headers: "no_headers",
    Combine_all_files_headers: "combine_all_files_headers",
} as const;

export type Header = (typeof Header)[keyof typeof Header];

export const IdentityConfigurationType = {
    Managed: "Managed",
    AMLToken: "AMLToken",
    UserIdentity: "UserIdentity",
} as const;

export type IdentityConfigurationType = (typeof IdentityConfigurationType)[keyof typeof IdentityConfigurationType];

export const ImageAnnotationType = {
    Classification: "Classification",
    BoundingBox: "BoundingBox",
    InstanceSegmentation: "InstanceSegmentation",
} as const;

export type ImageAnnotationType = (typeof ImageAnnotationType)[keyof typeof ImageAnnotationType];

export const ImageType = {
    Docker: "docker",
    Azureml: "azureml",
} as const;

export type ImageType = (typeof ImageType)[keyof typeof ImageType];

export const IncrementalDataRefresh = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type IncrementalDataRefresh = (typeof IncrementalDataRefresh)[keyof typeof IncrementalDataRefresh];

export const InputDeliveryMode = {
    ReadOnlyMount: "ReadOnlyMount",
    ReadWriteMount: "ReadWriteMount",
    Download: "Download",
    Direct: "Direct",
    EvalMount: "EvalMount",
    EvalDownload: "EvalDownload",
} as const;

export type InputDeliveryMode = (typeof InputDeliveryMode)[keyof typeof InputDeliveryMode];

export const InstanceSegmentationPrimaryMetrics = {
    /**
     * Mean Average Precision (MAP) is the average of AP (Average Precision).
     * AP is calculated for each class and averaged to get the MAP.
     */
    MeanAveragePrecision: "MeanAveragePrecision",
} as const;

export type InstanceSegmentationPrimaryMetrics = (typeof InstanceSegmentationPrimaryMetrics)[keyof typeof InstanceSegmentationPrimaryMetrics];

export const JobInputType = {
    Literal: "literal",
    Uri_file: "uri_file",
    Uri_folder: "uri_folder",
    Mltable: "mltable",
    Custom_model: "custom_model",
    Mlflow_model: "mlflow_model",
    Triton_model: "triton_model",
} as const;

export type JobInputType = (typeof JobInputType)[keyof typeof JobInputType];

export const JobLimitsType = {
    Command: "Command",
    Sweep: "Sweep",
} as const;

export type JobLimitsType = (typeof JobLimitsType)[keyof typeof JobLimitsType];

export const JobOutputType = {
    Uri_file: "uri_file",
    Uri_folder: "uri_folder",
    Mltable: "mltable",
    Custom_model: "custom_model",
    Mlflow_model: "mlflow_model",
    Triton_model: "triton_model",
} as const;

export type JobOutputType = (typeof JobOutputType)[keyof typeof JobOutputType];

export const JobType = {
    AutoML: "AutoML",
    Command: "Command",
    Sweep: "Sweep",
    Pipeline: "Pipeline",
} as const;

export type JobType = (typeof JobType)[keyof typeof JobType];

export const LearningRateScheduler = {
    /**
     * No learning rate scheduler selected.
     */
    None: "None",
    /**
     * Cosine Annealing With Warmup.
     */
    WarmupCosine: "WarmupCosine",
    /**
     * Step learning rate scheduler.
     */
    Step: "Step",
} as const;

export type LearningRateScheduler = (typeof LearningRateScheduler)[keyof typeof LearningRateScheduler];

export const LinkedServiceLinkType = {
    Synapse: "Synapse",
} as const;

export type LinkedServiceLinkType = (typeof LinkedServiceLinkType)[keyof typeof LinkedServiceLinkType];

export const LoadBalancerType = {
    PublicIp: "PublicIp",
    InternalLoadBalancer: "InternalLoadBalancer",
} as const;

export type LoadBalancerType = (typeof LoadBalancerType)[keyof typeof LoadBalancerType];

export const LogVerbosity = {
    /**
     * No logs emitted.
     */
    NotSet: "NotSet",
    /**
     * Debug and above log statements logged.
     */
    Debug: "Debug",
    /**
     * Info and above log statements logged.
     */
    Info: "Info",
    /**
     * Warning and above log statements logged.
     */
    Warning: "Warning",
    /**
     * Error and above log statements logged.
     */
    Error: "Error",
    /**
     * Only critical statements logged.
     */
    Critical: "Critical",
} as const;

export type LogVerbosity = (typeof LogVerbosity)[keyof typeof LogVerbosity];

export const MLAssistConfigurationType = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type MLAssistConfigurationType = (typeof MLAssistConfigurationType)[keyof typeof MLAssistConfigurationType];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const MaterializationStoreType = {
    None: "None",
    Online: "Online",
    Offline: "Offline",
    OnlineAndOffline: "OnlineAndOffline",
} as const;

export type MaterializationStoreType = (typeof MaterializationStoreType)[keyof typeof MaterializationStoreType];

export const MediaType = {
    Image: "Image",
    Text: "Text",
} as const;

export type MediaType = (typeof MediaType)[keyof typeof MediaType];

export const ModelSize = {
    /**
     * No value selected.
     */
    None: "None",
    /**
     * Small size.
     */
    Small: "Small",
    /**
     * Medium size.
     */
    Medium: "Medium",
    /**
     * Large size.
     */
    Large: "Large",
    /**
     * Extra large size.
     */
    ExtraLarge: "ExtraLarge",
} as const;

export type ModelSize = (typeof ModelSize)[keyof typeof ModelSize];

export const MultiSelect = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type MultiSelect = (typeof MultiSelect)[keyof typeof MultiSelect];

export const NCrossValidationsMode = {
    /**
     * Determine N-Cross validations value automatically. Supported only for 'Forecasting' AutoML task.
     */
    Auto: "Auto",
    /**
     * Use custom N-Cross validations value.
     */
    Custom: "Custom",
} as const;

export type NCrossValidationsMode = (typeof NCrossValidationsMode)[keyof typeof NCrossValidationsMode];

export const NodesValueType = {
    All: "All",
} as const;

export type NodesValueType = (typeof NodesValueType)[keyof typeof NodesValueType];

export const ObjectDetectionPrimaryMetrics = {
    /**
     * Mean Average Precision (MAP) is the average of AP (Average Precision).
     * AP is calculated for each class and averaged to get the MAP.
     */
    MeanAveragePrecision: "MeanAveragePrecision",
} as const;

export type ObjectDetectionPrimaryMetrics = (typeof ObjectDetectionPrimaryMetrics)[keyof typeof ObjectDetectionPrimaryMetrics];

export const OperatingSystemType = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

export type OperatingSystemType = (typeof OperatingSystemType)[keyof typeof OperatingSystemType];

export const OsType = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

export type OsType = (typeof OsType)[keyof typeof OsType];

export const OutputDeliveryMode = {
    ReadWriteMount: "ReadWriteMount",
    Upload: "Upload",
} as const;

export type OutputDeliveryMode = (typeof OutputDeliveryMode)[keyof typeof OutputDeliveryMode];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
    Timeout: "Timeout",
} as const;

export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const Protocol = {
    Tcp: "tcp",
    Udp: "udp",
    Http: "http",
} as const;

export type Protocol = (typeof Protocol)[keyof typeof Protocol];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const PublicNetworkAccessType = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccessType = (typeof PublicNetworkAccessType)[keyof typeof PublicNetworkAccessType];

export const RandomSamplingAlgorithmRule = {
    Random: "Random",
    Sobol: "Sobol",
} as const;

export type RandomSamplingAlgorithmRule = (typeof RandomSamplingAlgorithmRule)[keyof typeof RandomSamplingAlgorithmRule];

export const RecurrenceFrequency = {
    /**
     * Minute frequency
     */
    Minute: "Minute",
    /**
     * Hour frequency
     */
    Hour: "Hour",
    /**
     * Day frequency
     */
    Day: "Day",
    /**
     * Week frequency
     */
    Week: "Week",
    /**
     * Month frequency
     */
    Month: "Month",
} as const;

export type RecurrenceFrequency = (typeof RecurrenceFrequency)[keyof typeof RecurrenceFrequency];

export const ReferenceType = {
    Id: "Id",
    DataPath: "DataPath",
    OutputPath: "OutputPath",
} as const;

export type ReferenceType = (typeof ReferenceType)[keyof typeof ReferenceType];

export const RegressionModels = {
    /**
     * Elastic net is a popular type of regularized linear regression that combines two popular penalties, specifically the L1 and L2 penalty functions.
     */
    ElasticNet: "ElasticNet",
    /**
     * The technique of transiting week learners into a strong learner is called Boosting. The gradient boosting algorithm process works on this theory of execution.
     */
    GradientBoosting: "GradientBoosting",
    /**
     * Decision Trees are a non-parametric supervised learning method used for both classification and regression tasks.
     * The goal is to create a model that predicts the value of a target variable by learning simple decision rules inferred from the data features.
     */
    DecisionTree: "DecisionTree",
    /**
     * K-nearest neighbors (KNN) algorithm uses 'feature similarity' to predict the values of new datapoints
     * which further means that the new data point will be assigned a value based on how closely it matches the points in the training set.
     */
    KNN: "KNN",
    /**
     * Lasso model fit with Least Angle Regression a.k.a. Lars. It is a Linear Model trained with an L1 prior as regularizer.
     */
    LassoLars: "LassoLars",
    /**
     * SGD: Stochastic gradient descent is an optimization algorithm often used in machine learning applications
     * to find the model parameters that correspond to the best fit between predicted and actual outputs.
     * It's an inexact but powerful technique.
     */
    SGD: "SGD",
    /**
     * Random forest is a supervised learning algorithm.
     * The "forest" it builds, is an ensemble of decision trees, usually trained with the “bagging” method.
     * The general idea of the bagging method is that a combination of learning models increases the overall result.
     */
    RandomForest: "RandomForest",
    /**
     * Extreme Trees is an ensemble machine learning algorithm that combines the predictions from many decision trees. It is related to the widely used random forest algorithm.
     */
    ExtremeRandomTrees: "ExtremeRandomTrees",
    /**
     * LightGBM is a gradient boosting framework that uses tree based learning algorithms.
     */
    LightGBM: "LightGBM",
    /**
     * XGBoostRegressor: Extreme Gradient Boosting Regressor is a supervised machine learning model using ensemble of base learners.
     */
    XGBoostRegressor: "XGBoostRegressor",
} as const;

export type RegressionModels = (typeof RegressionModels)[keyof typeof RegressionModels];

export const RegressionPrimaryMetrics = {
    /**
     * The Spearman's rank coefficient of correlation is a nonparametric measure of rank correlation.
     */
    SpearmanCorrelation: "SpearmanCorrelation",
    /**
     * The Normalized Root Mean Squared Error (NRMSE) the RMSE facilitates the comparison between models with different scales.
     */
    NormalizedRootMeanSquaredError: "NormalizedRootMeanSquaredError",
    /**
     * The R2 score is one of the performance evaluation measures for forecasting-based machine learning models.
     */
    R2Score: "R2Score",
    /**
     * The Normalized Mean Absolute Error (NMAE) is a validation metric to compare the Mean Absolute Error (MAE) of (time) series with different scales.
     */
    NormalizedMeanAbsoluteError: "NormalizedMeanAbsoluteError",
} as const;

export type RegressionPrimaryMetrics = (typeof RegressionPrimaryMetrics)[keyof typeof RegressionPrimaryMetrics];

export const RemoteLoginPortPublicAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    NotSpecified: "NotSpecified",
} as const;

export type RemoteLoginPortPublicAccess = (typeof RemoteLoginPortPublicAccess)[keyof typeof RemoteLoginPortPublicAccess];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RuleCategory = {
    Required: "Required",
    Recommended: "Recommended",
    UserDefined: "UserDefined",
} as const;

export type RuleCategory = (typeof RuleCategory)[keyof typeof RuleCategory];

export const RuleStatus = {
    Inactive: "Inactive",
    Active: "Active",
} as const;

export type RuleStatus = (typeof RuleStatus)[keyof typeof RuleStatus];

export const RuleType = {
    FQDN: "FQDN",
    PrivateEndpoint: "PrivateEndpoint",
    ServiceTag: "ServiceTag",
} as const;

export type RuleType = (typeof RuleType)[keyof typeof RuleType];

export const SamplingAlgorithmType = {
    Grid: "Grid",
    Random: "Random",
    Bayesian: "Bayesian",
} as const;

export type SamplingAlgorithmType = (typeof SamplingAlgorithmType)[keyof typeof SamplingAlgorithmType];

export const ScaleType = {
    Default: "Default",
    TargetUtilization: "TargetUtilization",
} as const;

export type ScaleType = (typeof ScaleType)[keyof typeof ScaleType];

export const ScheduleActionType = {
    CreateJob: "CreateJob",
    InvokeBatchEndpoint: "InvokeBatchEndpoint",
} as const;

export type ScheduleActionType = (typeof ScheduleActionType)[keyof typeof ScheduleActionType];

export const ScheduleProvisioningState = {
    Completed: "Completed",
    Provisioning: "Provisioning",
    Failed: "Failed",
} as const;

export type ScheduleProvisioningState = (typeof ScheduleProvisioningState)[keyof typeof ScheduleProvisioningState];

export const ScheduleStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus];

export const SeasonalityMode = {
    /**
     * Seasonality to be determined automatically.
     */
    Auto: "Auto",
    /**
     * Use the custom seasonality value.
     */
    Custom: "Custom",
} as const;

export type SeasonalityMode = (typeof SeasonalityMode)[keyof typeof SeasonalityMode];

export const SecretsType = {
    AccountKey: "AccountKey",
    Certificate: "Certificate",
    Sas: "Sas",
    ServicePrincipal: "ServicePrincipal",
} as const;

export type SecretsType = (typeof SecretsType)[keyof typeof SecretsType];

export const ServiceDataAccessAuthIdentity = {
    /**
     * Do not use any identity for service data access.
     */
    None: "None",
    /**
     * Use the system assigned managed identity of the Workspace to authenticate service data access.
     */
    WorkspaceSystemAssignedIdentity: "WorkspaceSystemAssignedIdentity",
    /**
     * Use the user assigned managed identity of the Workspace to authenticate service data access.
     */
    WorkspaceUserAssignedIdentity: "WorkspaceUserAssignedIdentity",
} as const;

export type ServiceDataAccessAuthIdentity = (typeof ServiceDataAccessAuthIdentity)[keyof typeof ServiceDataAccessAuthIdentity];

export const ShortSeriesHandlingConfiguration = {
    /**
     * Represents no/null value.
     */
    None: "None",
    /**
     * Short series will be padded if there are no long series, otherwise short series will be dropped.
     */
    Auto: "Auto",
    /**
     * All the short series will be padded.
     */
    Pad: "Pad",
    /**
     * All the short series will be dropped.
     */
    Drop: "Drop",
} as const;

export type ShortSeriesHandlingConfiguration = (typeof ShortSeriesHandlingConfiguration)[keyof typeof ShortSeriesHandlingConfiguration];

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const SourceType = {
    Delimited_files: "delimited_files",
    Json_lines_files: "json_lines_files",
    Parquet_files: "parquet_files",
} as const;

export type SourceType = (typeof SourceType)[keyof typeof SourceType];

export const SshPublicAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SshPublicAccess = (typeof SshPublicAccess)[keyof typeof SshPublicAccess];

export const SslConfigStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
    Auto: "Auto",
} as const;

export type SslConfigStatus = (typeof SslConfigStatus)[keyof typeof SslConfigStatus];

export const StackMetaLearnerType = {
    None: "None",
    /**
     * Default meta-learners are LogisticRegression for classification tasks.
     */
    LogisticRegression: "LogisticRegression",
    /**
     * Default meta-learners are LogisticRegression for classification task when CV is on.
     */
    LogisticRegressionCV: "LogisticRegressionCV",
    LightGBMClassifier: "LightGBMClassifier",
    /**
     * Default meta-learners are LogisticRegression for regression task.
     */
    ElasticNet: "ElasticNet",
    /**
     * Default meta-learners are LogisticRegression for regression task when CV is on.
     */
    ElasticNetCV: "ElasticNetCV",
    LightGBMRegressor: "LightGBMRegressor",
    LinearRegression: "LinearRegression",
} as const;

export type StackMetaLearnerType = (typeof StackMetaLearnerType)[keyof typeof StackMetaLearnerType];

export const StochasticOptimizer = {
    /**
     * No optimizer selected.
     */
    None: "None",
    /**
     * Stochastic Gradient Descent optimizer.
     */
    Sgd: "Sgd",
    /**
     * Adam is algorithm the optimizes stochastic objective functions based on adaptive estimates of moments
     */
    Adam: "Adam",
    /**
     * AdamW is a variant of the optimizer Adam that has an improved implementation of weight decay.
     */
    Adamw: "Adamw",
} as const;

export type StochasticOptimizer = (typeof StochasticOptimizer)[keyof typeof StochasticOptimizer];

export const TargetAggregationFunction = {
    /**
     * Represent no value set.
     */
    None: "None",
    Sum: "Sum",
    Max: "Max",
    Min: "Min",
    Mean: "Mean",
} as const;

export type TargetAggregationFunction = (typeof TargetAggregationFunction)[keyof typeof TargetAggregationFunction];

export const TargetLagsMode = {
    /**
     * Target lags to be determined automatically.
     */
    Auto: "Auto",
    /**
     * Use the custom target lags.
     */
    Custom: "Custom",
} as const;

export type TargetLagsMode = (typeof TargetLagsMode)[keyof typeof TargetLagsMode];

export const TargetRollingWindowSizeMode = {
    /**
     * Determine rolling windows size automatically.
     */
    Auto: "Auto",
    /**
     * Use the specified rolling window size.
     */
    Custom: "Custom",
} as const;

export type TargetRollingWindowSizeMode = (typeof TargetRollingWindowSizeMode)[keyof typeof TargetRollingWindowSizeMode];

export const TaskType = {
    /**
     * Classification in machine learning and statistics is a supervised learning approach in which
     * the computer program learns from the data given to it and make new observations or classifications.
     */
    Classification: "Classification",
    /**
     * Regression means to predict the value using the input data. Regression models are used to predict a continuous value.
     */
    Regression: "Regression",
    /**
     * Forecasting is a special kind of regression task that deals with time-series data and creates forecasting model
     * that can be used to predict the near future values based on the inputs.
     */
    Forecasting: "Forecasting",
    /**
     * Image Classification. Multi-class image classification is used when an image is classified with only a single label
     * from a set of classes - e.g. each image is classified as either an image of a 'cat' or a 'dog' or a 'duck'.
     */
    ImageClassification: "ImageClassification",
    /**
     * Image Classification Multilabel. Multi-label image classification is used when an image could have one or more labels
     * from a set of labels - e.g. an image could be labeled with both 'cat' and 'dog'.
     */
    ImageClassificationMultilabel: "ImageClassificationMultilabel",
    /**
     * Image Object Detection. Object detection is used to identify objects in an image and locate each object with a
     * bounding box e.g. locate all dogs and cats in an image and draw a bounding box around each.
     */
    ImageObjectDetection: "ImageObjectDetection",
    /**
     * Image Instance Segmentation. Instance segmentation is used to identify objects in an image at the pixel level,
     * drawing a polygon around each object in the image.
     */
    ImageInstanceSegmentation: "ImageInstanceSegmentation",
    /**
     * Text classification (also known as text tagging or text categorization) is the process of sorting texts into categories.
     * Categories are mutually exclusive.
     */
    TextClassification: "TextClassification",
    /**
     * Multilabel classification task assigns each sample to a group (zero or more) of target labels.
     */
    TextClassificationMultilabel: "TextClassificationMultilabel",
    /**
     * Text Named Entity Recognition a.k.a. TextNER.
     * Named Entity Recognition (NER) is the ability to take free-form text and identify the occurrences of entities such as people, locations, organizations, and more.
     */
    TextNER: "TextNER",
} as const;

export type TaskType = (typeof TaskType)[keyof typeof TaskType];

export const TextAnnotationType = {
    Classification: "Classification",
    NamedEntityRecognition: "NamedEntityRecognition",
} as const;

export type TextAnnotationType = (typeof TextAnnotationType)[keyof typeof TextAnnotationType];

export const TriggerType = {
    Recurrence: "Recurrence",
    Cron: "Cron",
} as const;

export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

export const UseStl = {
    /**
     * No stl decomposition.
     */
    None: "None",
    Season: "Season",
    SeasonTrend: "SeasonTrend",
} as const;

export type UseStl = (typeof UseStl)[keyof typeof UseStl];

export const ValidationMetricType = {
    /**
     * No metric.
     */
    None: "None",
    /**
     * Coco metric.
     */
    Coco: "Coco",
    /**
     * Voc metric.
     */
    Voc: "Voc",
    /**
     * CocoVoc metric.
     */
    CocoVoc: "CocoVoc",
} as const;

export type ValidationMetricType = (typeof ValidationMetricType)[keyof typeof ValidationMetricType];

export const ValueFormat = {
    JSON: "JSON",
} as const;

export type ValueFormat = (typeof ValueFormat)[keyof typeof ValueFormat];

export const VmPriority = {
    Dedicated: "Dedicated",
    LowPriority: "LowPriority",
} as const;

export type VmPriority = (typeof VmPriority)[keyof typeof VmPriority];

export const VolumeDefinitionType = {
    Bind: "bind",
    Volume: "volume",
    Tmpfs: "tmpfs",
    Npipe: "npipe",
} as const;

export type VolumeDefinitionType = (typeof VolumeDefinitionType)[keyof typeof VolumeDefinitionType];

export const WebhookType = {
    AzureDevOps: "AzureDevOps",
} as const;

export type WebhookType = (typeof WebhookType)[keyof typeof WebhookType];

export const WeekDay = {
    /**
     * Monday weekday
     */
    Monday: "Monday",
    /**
     * Tuesday weekday
     */
    Tuesday: "Tuesday",
    /**
     * Wednesday weekday
     */
    Wednesday: "Wednesday",
    /**
     * Thursday weekday
     */
    Thursday: "Thursday",
    /**
     * Friday weekday
     */
    Friday: "Friday",
    /**
     * Saturday weekday
     */
    Saturday: "Saturday",
    /**
     * Sunday weekday
     */
    Sunday: "Sunday",
} as const;

export type WeekDay = (typeof WeekDay)[keyof typeof WeekDay];
