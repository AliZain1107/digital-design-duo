import { createContext, useContext } from "react";

// Define language types
export type Language = "en" | "fr";

// Define the translation interface
export interface Translations {
  // Navbar
  pricing: string;
  blog: string;
  signIn: string;

  //Navbar section
  howRealEstateAgentsBoostSales: string;
  genZUltimateGuideToInteriors: string;
  howToBuildYourHouse: string;
  ultimateGuideToAIInteriorDesign: string;
  eightStunningAIBedroomDesigns: string;
  expertTipsOnHomeInteriors: string;

  // Blog post titles for French translation
  realEstateAgentsAIVirtualStagingTitle: string;
  genZInstagramWorthyInteriorsTitle: string;
  buildHouseAIToolsPorchDesignTitle: string;
  ultimateGuideAIInteriorDesignTitle: string;
  eightStunningAIBedroomDesignsTitle: string;
  expertTipsHomeInteriorsTitle: string;

  // New blog post titles
  top5ChallengesInteriorDesignTitle: string;
  commercialInteriorDesignAITitle: string;
  creatingOutdoorSpacesAITitle: string;
  costEffectivenessAIDesignTitle: string;
  transformingSmallLivingSpacesTitle: string;
  aiDrivenCustomizationFutureTitle: string;
  residentialInteriorDesignGuideTitle: string;
  futuristicInteriorDesignStylesTitle: string;
  roomPlannerAISarahJohnsonEvaluationsTitle: string;
  innovativeStairRailingIdeasTitle: string;
  designLivingRoomLikeProTitle: string;
  futureWorkspaceAIOfficeInteriorsTitle: string;
  newBlog2Title: string;
  generativeAIRevolutionizingDesignTitle: string;
  aiAssistantInteriorDesignPromptsTitle: string;
  stylyVivaTechPartnershipTitle: string;
  chatGPTInteriorDesignTitle: string;
  unlockingPowerAIInteriorDesignTitle: string;
  footerTrademark: string;

  // Hero section
  welcomeToFuture: string;
  mostUsedAITool: string;
  aiDesignTool: string;
  for: string;
  modernSpaces: string;
  redesignEmptyRooms: string;
  forRealEstate: string;
  noToolsNoDownloads: string;
  uploadPhoto: string;
  supporting: string;
  realEstatePros: string;

  // Unlock potential section
  designExcellence: string;
  unlockThePotential: string;
  aiDrawsInspiration: string;
  legendaryArchitects: string;
  experienceAdvancedAI: string;
  explore: string;

  // Architecture Revolution
  architectureRevolution: string;
  homeDesignByAI: string;

  // ModernSpaces
  redesignRooms: string;
  forRealEstateRenovation: string;
  noToolsJustResults: string;

  // HowItWorks
  simpleProcess: string;
  howItWorks: string;
  transformSpace: string;
  upload: string;
  uploadDescription: string;
  personalize: string;
  personalizeDescription: string;
  furnitureSelection: string;
  enjoy: string;
  enjoyDescription: string;
  aiForInteriorDesign: string;
  getStartedFree: string;
  noCreditCard: string;

  // Testimonials
  dontTakeOurWord: string;
  hearFromCustomers: string;

  // FAQ
  howItWorksFAQ: string;
  faqs: string;
  faqDescription: string;
  faqQuestions: { question: string; answer: string }[];

  // VideoSection
  seeItInAction: string;
  videoDescription: string;
  watchDemo: string;

  // SupportedBy
  supportedBy: string;

  // MarketSegmentCarousel
  tailoredSolutionsForEveryNeed: string;
  aiDesignToolServesDiverseMarkets: string;
  realEstateProfessionals: string;
  homeownersRenters: string;
  startupsTechCreators: string;
  interiorDesignersArchitects: string;
  retailersBrands: string;
  wallpaperBrands: string;
  wallpaperFlooringBrands: string;
  flooringBrands: string;

  // Footer links
  footerCompany: string;
  footerAbout: string;
  footerFeatures: string;
  footerPricing: string;
  footerContact: string;
  footerLegal: string;
  footerTerms: string;
  footerPrivacy: string;
  footerCopyright: string;
  footerSlogan: string;
  footerLogin: string;
  footerSignup: string;
  footerCopyrightYear: string;
  footerVideoGuide: string;
  footerCookieSettings: string;
  footerBlog: string;

  // Cookie Settings popup
  cookieSettingsTitle: string;
  cookieSettingsDescription: string;
  essentialCookies: string;
  essentialCookiesDescription: string;
  analyticsCookies: string;
  analyticsCookiesDescription: string;
  marketingCookies: string;
  marketingCookiesDescription: string;
  acceptAll: string;
  acceptSelected: string;
  rejectAll: string;
  close: string;

  // Terms of Service page
  termsOfService: string;
  termsLastUpdated: string;
  legalNotice: string;
  legalNoticeContent: string;
  hosting: string;
  hostingContent: string;
  definitions: string;
  definitionsContent: string;
  generalConditions: string;
  article1: string;
  article1Content: string;
  article2: string;
  article2Content: string;
  article3: string;
  article3Content: string;
  article4: string;
  article4Content: string;
  article5: string;
  article5Content: string;
  article6: string;
  article6Content: string;
  article7: string;
  article7Content: string;
  article8: string;
  article8Content: string;
  article9: string;
  article9Content: string;
  article10: string;
  article10Content: string;
  article11: string;
  article11Content: string;
  article12: string;
  article12Content: string;
  article13: string;
  article13Content: string;
  freeTrial: string;
  freeTrialContent: string;
  paidPlan: string;
  paidPlanContent: string;
  noRefundPolicy: string;
  noRefundPolicyContent: string;
  userResponsibility: string;
  userResponsibilityContent: string;

  // Privacy Policy page
  privacyPolicy: string;
  privacyLastUpdated: string;
  privacyIntro: string;
  privacyIntroContent: string;
  dataWeCollect: string;
  dataWeCollectContent: string;
  accountData: string;
  accountDataContent: string;
  stylyImageData: string;
  stylyImageDataContent: string;
  browsingData: string;
  browsingDataContent: string;
  howWeUseData: string;
  howWeUseDataContent: string;
  purposeLegalBasisTable: string;
  tableHeaderPurpose: string;
  tableHeaderLegalBasis: string;
  tablePurpose1: string;
  tableLegalBasis1: string;
  tablePurpose2: string;
  tableLegalBasis2: string;
  tablePurpose3: string;
  tableLegalBasis3: string;
  tablePurpose4: string;
  tableLegalBasis4: string;
  tablePurpose5: string;
  tableLegalBasis5: string;
  whoHasAccess: string;
  whoHasAccessContent: string;
  authorities: string;
  authoritiesContent: string;
  thirdPartyProviders: string;
  thirdPartyProvidersContent: string;
  dataRetention: string;
  dataRetentionContent: string;
  retentionAccount: string;
  retentionAccountContent: string;
  retentionImages: string;
  retentionImagesContent: string;
  retentionBrowsing: string;
  retentionBrowsingContent: string;
  internationalTransfers: string;
  internationalTransfersContent: string;
  dataSecurity: string;
  dataSecurityContent: string;
  yourRights: string;
  yourRightsContent: string;
  rightAccess: string;
  rightRectification: string;
  rightErasure: string;
  rightRestriction: string;
  rightPortability: string;
  rightObject: string;
  rightWithdrawConsent: string;
  rightComplaint: string;
  privacyChanges: string;
  privacyChangesContent: string;
  privacyContact: string;
  privacyContactContent: string;

  // Stats section
  statsHeading1: string;
  statsHeading2: string;
  statsHours: string;
  statsDesigners: string;
  statsCompanies: string;
  statsArticles: string;

  // Blog section
  blogTrends: string;
  blogDescription: string;
  realEstateLandscape: string;
  generationalTrendsReport: string;
  buyersBeginSearch: string;
  virtualStagingRevolution: string;
  propertiesWithAIStaging: string;
  virtuallyStagedSellFaster: string;
  aiStagingCostReduction: string;
  propertiesWithAIEnhancedPhotos: string;
  buyersStruggleToVisualize: string;
  source: string;
  realEstateStagingAssociation: string;
  whyAIStagingIndustryStandard: string;
  economicEfficiency: string;
  economicEfficiencyDescription: string;
  speedToMarket: string;
  speedToMarketDescription: string;
  marketSpecificCustomization: string;
  marketSpecificCustomizationDescription: string;
  targetSpecificBuyerDemographics: string;
  adjustStagingRealTimeFeedback: string;
  createSeasonalVariations: string;
  generateDesignOptions: string;
  realWorldSuccessStories: string;
  caseStudy1Title: string;
  caseStudy1Property: string;
  caseStudy1Challenge: string;
  caseStudy1Solution: string;
  caseStudy1Result: string;
  caseStudy2Title: string;
  caseStudy2Property: string;
  caseStudy2Challenge: string;
  caseStudy2Solution: string;
  caseStudy2Result: string;
  agentImplementationTitle: string;
  segmentedMarketingApproaches: string;
  segmentedMarketingDescription: string;
  emptyNesterDownsizing: string;
  firstTimeHomebuyer: string;
  workFromHomeLayouts: string;
  multigenerationalLiving: string;
  renovationVisualizationTitle: string;
  renovationVisualizationDescription: string;
  energyEfficientUpgrades: string;
  spaceReconfiguration: string;
  modernUpdates: string;
  accessibilityModifications: string;
  digitalMarketingIntegration: string;
  digitalMarketingDescription: string;
  higherEngagement: string;
  longerTimeSpent: string;
  moreSavedListings: string;
  higherQualityLeads: string;
  currentMarketAnalysis: string;
  marketAnalysisDescription: string;
  realEstateTechReport: string;
  aiStagingAdoption: string;
  luxuryPropertiesUseAI: string;
  virtualStagingMarketGrowth: string;
  declineOfPhysicalStaging: string;
  evidenceBasedBestPractices: string;
  strategicApplication: string;
  marketResponsiveDesign: string;
  highResolutionImages: string;
  consistentHeightPerspective: string;
  cleanSpacesForAI: string;
  focusOnProblematicSpaces: string;
  showcaseVersatility: string;
  demonstrateLifestylePossibilities: string;
  researchLocalPreferences: string;
  alignWithDesignTrends: string;
  considerPropertyElements: string;
  expertAnalysis: string;
  expertAnalysisQuote: string;
  the2025Reality: string;
  aiStagingEmbeddedInPractice: string;
  transformRealEstateBusiness: string;
  experienceAIAdvantage: string;
  meetBuyerExpectations: string;
  maximizePropertyValues: string;
  reduceDaysOnMarket: string;
  scaleMarketingEfforts: string;
  deliverConsistentPresentation: string;
  realEstateVirtualStaging: string;

  marketOverview: string;
  keyEvaluationCriteria: string;
  marketLeaders: string;
  emergingInnovators: string;
  stylyAdvantage: string;
  performanceMetrics: string;
  caseStudy: string;
  futureTrends: string;
  expertPerspectives: string;
  makingTheRightChoice: string;
  conclusion: string;
  foyr: string;
  knownForCommercialApplications: string;
  palette: string;
  focusesOnColorHarmony: string;
  pablo: string;
  specializesInLightingDesign: string;
  reroomAI: string;
  notableForRenovationProjects: string;
  promeAI: string;
  specializesInTextureGeneration: string;
  realTimeStyleTransferTechnology: string;
  advancedMaterialRecognition: string;
  intelligentSpaceOptimization: string;
  timeSaved: string;
  reductionInInitialDesignPhase: string;
  clientSatisfactionRates: string;
  positiveFeedback: string;
  costReduction: string;
  averageSavingsInProjectPlanning: string;
  reduceDesignIterationTime: string;
  cutDesignCosts: string;
  integrationOfARVRTechnologies: string;

  sustainableDesignAutomation: string;
  aiToolsAreNotReplacingDesigners: string;
  yourSpecificNeedsAndUseCases: string;
  budgetConstraints: string;
  whileEachPlatformOffersUniqueAdvantages: string;
  emergesAsAComprehensiveSolution: string;

  //AI Bedroom
  tableOfContents: string;
  introduction: string;
  aiInBedroomDesign: string;
  aiInBedroomDesignText: string;
  stylyioOverview: string;
  stylyioOverviewText: string;
  scandinavianSerenity: string;
  scandinavianBedroomPrompt: string;
  modernLuxurySuite: string;
  modernLuxurySuitePrompt: string;
  coastalRetreat: string;
  coastalBedroomPrompt: string;
  urbanIndustrial: string;
  urbanIndustrialPrompt: string;
  bohemianDreams: string;
  bohemianDreamsPrompt: string;
  eclecticFusion: string;
  eclecticFusionPrompt: string;
  minimalistZen: string;
  minimalistZenPrompt: string;
  vintageCharm: string;
  vintageCharmPrompt: string;

  expertDesignTips: string;
  expertDesignTipsText: string;
  japaneseMinimalism: string;
  japaneseMinimalismPrompt: string;
  introductionText: string;
  eightAIPoweredBedroomDesigns: string;
  japaneseZen: string;
  japaneseZenPrompt: string;
  midCenturyModern: string;
  midCenturyModernPrompt: string;
  contemporaryGlam: string;
  contemporaryGlamPrompt: string;

  considerNaturalLight: string;
  ensureWalkableSpace: string;
  layerLighting: string;
  includeHiddenStorage: string;
  useCalmingMaterials: string;

  negativePromptGuidelines: string;
  avoidClutter: string;
  keepLightingNatural: string;
  stickToDesignStyle: string;
  maintainProportions: string;

  sourcesAndResearch: string;
  nationalSleepFoundation: string;
  interiorDesignMagazine: string;
  asidAnnualReport: string;
  harvardHealthSleepStudies: string;
  conclusionText: string;
  keywords: string;
  followUsHere: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  prompt: string;

  // General
  welcomeMessage: string;
  profileTitle: string;
  logoutButton: string;
  settingsTitle: string;
  saveButton: string;
  cancelButton: string;
  loadingMessage: string;
  errorMessage: string;
  successMessage: string;

  // Dashboard Section
  dashboardTitle: string;
  viewAnalytics: string;
  viewReports: string;
  viewTasks: string;

  // Task Management
  taskManagementTitle: string;
  taskListTitle: string;
  taskAssignButton: string;
  taskCompleteButton: string;
  taskInProgress: string;
  taskCompleted: string;
  taskOverdue: string;

  // Analytics Section
  analyticsTitle: string;
  viewDetailsButton: string;
  totalTasksCompleted: string;
  totalTasksAssigned: string;
  tasksInProgress: string;
  tasksCompleted: string;

  // Settings Section
  settingsSubtitle: string;
  updateProfileButton: string;
  changePasswordButton: string;
  languageSelection: string;
  notificationSettings: string;
  saveChangesButton: string;

  // Notifications Section
  notificationTitle: string;
  notificationNewTaskAssigned: string;
  notificationTaskCompleted: string;
  notificationNewMessage: string;

  // User Profile Section
  profileEditTitle: string;
  profileSaveButton: string;
  profileCancelButton: string;
  profilePictureUpload: string;
  profileName: string;
  profileEmail: string;
  profilePhone: string;
  profileAddress: string;

  // Error and Success Messages
  errorUpdatingProfile: string;
  successUpdatingProfile: string;
  errorSavingChanges: string;
  successSavingChanges: string;
  errorLoadingData: string;
  successLoadingData: string;
  creatingTrendySpaces: string;
  introductionText1: string;
  introductionText2: string;
  understandingAestheticPreferences: string;
  aestheticPreferencesText: string;
  colorPalettes: string;
  colorPalettesText: string;
  eclecticFurnitureAndDecor: string;
  eclecticFurnitureAndDecorText: string;
  minimalistMeetsMaximalist: string;
  minimalistMeetsMaximalistText: string;
  keyElementsOfInstagramWorthyInterior: string;
  instagramWorthyDefinition: string;
  naturalLighting: string;
  naturalLightingText: string;
  accentWalls: string;
  accentWallsText: string;
  statementPieces: string;
  statementPiecesText: string;
  greeneryAndPlants: string;
  greeneryAndPlantsText: string;
  layeredTextures: string;
  layeredTexturesText: string;
  declutteredVisuals: string;
  declutteredVisualsText: string;
  incorporatingSustainabilityAndTechnology: string;
  sustainabilityTechText: string;
  sustainableMaterials: string;
  sustainableMaterialsText: string;
  smartHomeTechnology: string;
  smartHomeTechnologyText: string;
  multiFunctionalFurniture: string;
  multiFunctionalFurnitureText: string;
  caseStudiesAndExamples: string;
  caseStudyIntro: string;
  economicEfficiencyText: string;
  geometricDreamBedroom: string;
  geometricDreamBedroomText: string;
  cafeInspiredKitchenNook: string;
  cafeInspiredKitchenNookText: string;
  bohoOutdoorBalcony: string;
  bohoOutdoorBalconyText: string;
  diyInstagramWorthyMakeovers: string;
  diyTipsIntro: string;
  startWithMoodBoard: string;
  startWithMoodBoardText: string;
  maximizeWhatYouHave: string;
  maximizeWhatYouHaveText: string;
  getCreativeWithPaint: string;
  getCreativeWithPaintText: string;
  thriftForJewels: string;
  thriftForJewelsText: string;
  accessorizeThoughtfully: string;
  accessorizeThoughtfullyText: string;
  playWithAnglesForPhotos: string;
  playWithAnglesForPhotosText: string;
  socialMediaShapingDesignTrends: string;
  socialMediaShapingDesignTrendsText: string;
  crowdsourcingCreativity: string;
  crowdsourcingCreativityText: string;
  massAppealToNicheInterests: string;
  massAppealToNicheInterestsText: string;
  interactiveShopping: string;
  interactiveShoppingText: string;
  empoweringNewCreators: string;
  empoweringNewCreatorsText: string;
  shareYourBestSpace: string;
  shareYourBestSpaceText: string;
  shareYourBestSpaceInstagram: string;
  prevArticle: string;
  nextArticle: string;
  readMore: string;
  stylyAI: string;
  planBeforeYouSpend: string;
  planBeforeYouSpendContent: string;
  optimizeRoomLayoutWithAI: string;
  optimizeRoomLayoutWithAIContent: string;
  upcycleFurniture: string;
  upcycleFurnitureContent: string;
  focusOnDIYProjects: string;
  focusOnDIYProjectsContent: string;
  shopSmartForMaterials: string;
  shopSmartForMaterialsContent: string;
  prioritizeKeyElements: string;
  prioritizeKeyElementsContent: string;
  experimentWithColorsVirtually: string;
  experimentWithColorsVirtuallyContent: string;
  investInMultiFunctionalFurniture: string;
  investInMultiFunctionalFurnitureContent: string;
  useAIForAccessoryPlacement: string;
  useAIForAccessoryPlacementContent: string;
  stayUpdatedWithTrends: string;
  stayUpdatedWithTrendsContent: string;
  whyChooseStyly: string;
  stylyDescription: string;
  visualizeDesigns: string;
  experimentWithLayouts: string;
  saveMoney: string;
  getStartedWithStyly: string;
  freeAIRoomDesign: string;
  transformYourSpace: string;

  // Revolutionizing Architecture blog post
  revolutionizingArchitectureTitle: string;
  revolutionizingArchitectureIntro: string;
  revolutionizingArchitectureTableOfContents: string;
  revolutionizingArchitectureIntroduction: string;
  revolutionizingArchitectureIntroductionText: string;
  revolutionizingArchitectureAITransformation: string;
  revolutionizingArchitectureAITransformationText: string;
  revolutionizingArchitectureKeyBenefits: string;
  revolutionizingArchitectureKeyBenefitsText: string;
  revolutionizingArchitectureBenefit1: string;
  revolutionizingArchitectureBenefit1Text: string;
  revolutionizingArchitectureBenefit2: string;
  revolutionizingArchitectureBenefit2Text: string;
  revolutionizingArchitectureBenefit3: string;
  revolutionizingArchitectureBenefit3Text: string;
  revolutionizingArchitectureBenefit4: string;
  revolutionizingArchitectureBenefit4Text: string;
  revolutionizingArchitectureRealWorldApplications: string;
  revolutionizingArchitectureRealWorldApplicationsText: string;
  revolutionizingArchitectureApplication1: string;
  revolutionizingArchitectureApplication1Text: string;
  revolutionizingArchitectureApplication2: string;
  revolutionizingArchitectureApplication2Text: string;
  revolutionizingArchitectureApplication3: string;
  revolutionizingArchitectureApplication3Text: string;
  revolutionizingArchitectureFuture: string;
  revolutionizingArchitectureFutureText: string;
  revolutionizingArchitectureConclusion: string;
  revolutionizingArchitectureConclusionText: string;
  revolutionizingArchitectureCTATitle: string;
  revolutionizingArchitectureCTAText: string;
  revolutionizingArchitectureCTAButton: string;

  // Interior Design Trends 2025 Blog Post
  interiorTrends2025Title: string;
  interiorTrends2025TableOfContents: string;
  interiorTrends2025Introduction: string;
  interiorTrends2025IntroductionText: string;
  interiorTrends2025WhatsIn: string;
  interiorTrends2025WhatsOut: string;
  interiorTrends2025StylyRole: string;
  interiorTrends2025Conclusion: string;
  interiorTrends2025EcoConscious: string;
  interiorTrends2025EcoConsciousText: string;
  interiorTrends2025EcoConsciousStyly: string;
  interiorTrends2025Biophilic: string;
  interiorTrends2025BiophilicText: string;
  interiorTrends2025BiophilicStyly: string;
  interiorTrends2025SmartHome: string;
  interiorTrends2025SmartHomeText: string;
  interiorTrends2025SmartHomeStyly: string;
  interiorTrends2025BoldColors: string;
  interiorTrends2025BoldColorsText: string;
  interiorTrends2025BoldColorsStyly: string;
  interiorTrends2025Multifunctional: string;
  interiorTrends2025MultifunctionalText: string;
  interiorTrends2025MultifunctionalStyly: string;
  interiorTrends2025OverlyMinimalistic: string;
  interiorTrends2025OverlyMinimalisticText: string;
  interiorTrends2025AllWhiteKitchens: string;
  interiorTrends2025AllWhiteKitchensText: string;
  interiorTrends2025OpenShelving: string;
  interiorTrends2025OpenShelvingText: string;
  interiorTrends2025FastFurniture: string;
  interiorTrends2025FastFurnitureText: string;
  interiorTrends2025StylyRoleText: string;
  interiorTrends2025StylyFeature1: string;
  interiorTrends2025StylyFeature2: string;
  interiorTrends2025StylyFeature3: string;
  interiorTrends2025ConclusionText: string;
  interiorTrends2025CTATitle: string;
  interiorTrends2025CTAText: string;
  interiorTrends2025CTAButton: string;

  // Enhanced content with links and references
  interiorTrends2025BiophilicLink: string;
  interiorTrends2025BiophilicExternal: string;
  interiorTrends2025SmartHomeCTA: string;
  interiorTrends2025BoldColorsExternal: string;
  interiorTrends2025MultifunctionalLink: string;
  interiorTrends2025KitchenExternal: string;
  interiorTrends2025MinimalismLink: string;
  interiorTrends2025StylyRoleCTA: string;

  // Enhanced content for Revolutionizing Architecture blog
  revolutionizingArchitectureAIDesignLink: string;
  revolutionizingArchitectureArchDailyExternal: string;
  revolutionizingArchitectureBIM_CTA: string;
  revolutionizingArchitectureGenerativeExternal: string;
  revolutionizingArchitectureInteriorLink: string;
  revolutionizingArchitectureSmartBuildingExternal: string;
  revolutionizingArchitectureFutureLink: string;
  revolutionizingArchitectureFutureCTA: string;

  // Free AI Interior Design Blog Post
  freeAIDesignTitle: string;
  freeAIDesignTableOfContents: string;
  freeAIDesignIntroduction: string;
  freeAIDesignIntroductionText: string;
  freeAIDesignWhyChooseStyly: string;
  freeAIDesignWhyChooseStylyText: string;
  freeAIDesignFeature1: string;
  freeAIDesignFeature2: string;
  freeAIDesignFeature3: string;
  freeAIDesignFeature4: string;
  freeAIDesignHouzzExternal: string;
  freeAIDesignKeyFeatures: string;
  freeAIDesignAIPowered: string;
  freeAIDesignAIPoweredText: string;
  freeAIDesignExtensiveLibrary: string;
  freeAIDesignExtensiveLibraryText: string;
  freeAIDesignElleExternal: string;
  freeAIDesignUserFriendly: string;
  freeAIDesignUserFriendlyText: string;
  freeAIDesignTryNowCTA: string;
  freeAIDesignFreeCredits: string;
  freeAIDesignFreeCreditsText: string;
  freeAIDesignBenefits: string;
  freeAIDesignCostEffective: string;
  freeAIDesignCostEffectiveText: string;
  freeAIDesignTimeSaving: string;
  freeAIDesignTimeSavingText: string;
  freeAIDesignCustomizable: string;
  freeAIDesignCustomizableText: string;
  freeAIDesignTrendsLink: string;
  freeAIDesignHowToStart: string;
  freeAIDesignStep1: string;
  freeAIDesignStep2: string;
  freeAIDesignStep3: string;
  freeAIDesignStep4: string;
  freeAIDesignMarieExternal: string;
  freeAIDesignRoomDecorator: string;
  freeAIDesignRoomDecoratorText: string;
  freeAIDesignExpertTipsLink: string;
  freeAIDesignWhyStandsOut: string;
  freeAIDesignWhyStandsOutText: string;
  freeAIDesignCoteMaisonExternal: string;
  freeAIDesignExperienceCTA: string;
  freeAIDesignConclusion: string;
  freeAIDesignConclusionText: string;
  freeAIDesignArchitectureLink: string;
  freeAIDesignCTATitle: string;
  freeAIDesignCTAText: string;
  freeAIDesignCTAButton: string;

  // Real Estate Virtual Staging Blog Post - Hardcoded text translations
  transformRealEstateListings: string;
  startBoostingRealEstateSales: string;

  // Viral AI Room Design Prompts Blog Post
  viralAIRoomDesignPromptsTitle: string;
  viralAIRoomDesignPromptsDescription: string;

  // New Phase 1 Blog Posts
  impactAIInteriorDesignerTitle: string;
  aiVirtualRealityDesignTitle: string;
  aiAccessibleDesignTitle: string;

  // New Phase 2 Blog Posts
  dataAIPoweredDesignTitle: string;
  modernFamilyDesignTitle: string;
  sustainableDesignAITitle: string;
  aiSpacePlanningSmallApartmentsTitle: string;
  biophilicDesignAITitle: string;

  // New Phase 3 Blog Posts
  scienceColorDesignTitle: string;
  sustainableLandscapesAITitle: string;
  aiLandscapeDesignTitle: string;
  culturalDesignAITitle: string;
  textureImportanceDesignTitle: string;

  // Video Guide Page
  videoGuide: string;
  videoTutorials: string;
  learnAIInteriorDesign: string;
  discoverHowToUseAITools: string;
  readyToTransformSpaces: string;
  getStartedWithFreeAITools: string;

  // Services API Page
  servicesAPI: string;
  stylyAIAPISuite: string;
  mostAdvancedVisualIntelligencePlatform: string;
  developerAPIs: string;
  requestAccess: string;
  exploreAPIDocs: string;
  whyChooseOurAPIs: string;
  lightningFast: string;
  scalable: string;
  productionReady: string;
  global: string;
  millionsOfRequests: string;
  uptimeNineNineNine: string;
  worldwideCDN: string;
  ourCoreAPIs: string;
  fivePowerfulAPIs: string;
  aiFloorGenerationAPI: string;
  generateRealisticFloorDesigns: string;
  aiWallGenerationAPI: string;
  createSophisticatedWallDesigns: string;
  aiMoodboardGeneratorAPI: string;
  createCohesiveMoodboards: string;
  aiRealEstateEnhancementAPI: string;
  transformRealEstatePhotos: string;
  aiProductVisualizationAPI: string;
  integrateProductsIntoEnvironments: string;
  realisticMaterials: string;
  customizableStyles: string;
  highResolution: string;
  easyIntegration: string;
  variedTextures: string;
  customColors: string;
  realisticLighting: string;
  instantRendering: string;
  harmoniousPalettes: string;
  cohesiveStyles: string;
  multipleExports: string;
  advancedCustomization: string;
  virtualHomeStaging: string;
  photoEnhancement: string;
  multipleStyles: string;
  immediateROI: string;
  realisticPlacement: string;
  adaptiveLighting: string;
  automaticContext: string;
  ecommerceReady: string;
  simpleIntegration: string;
  startUsingAPIsWithCode: string;
  apiExample: string;
  generateAIFloorDesign: string;
  generatedDesignURL: string;
  whoItsBuiltFor: string;
  designPlatforms: string;
  integrateAIIntoDesignTools: string;
  realEstate: string;
  enhanceListingsWithVirtualStaging: string;
  ecommerce: string;
  visualizeProductsInRealEnvironments: string;
  mobileApps: string;
  addAICapabilitiesToApps: string;
  whyTeamsChooseStylyAPIs: string;
  cuttingEdgeAI: string;
  aiModelsTrainedOnMillions: string;
  fastDeployment: string;
  integrationUnder30Minutes: string;
  expertSupport: string;
  dedicatedTeamForIntegration: string;
  whatYouCanBuildWithIt: string;
  interiorDesignPlatform: string;
  createCompletePlatformWithGeneration: string;
  automaticDesignGeneration: string;
  customMoodboards: string;
  realTime3DVisualization: string;
  ecommerceApplication: string;
  integrateProductsToIncreaseConversions: string;
  contextualProductVisualization: string;
  automaticRecommendations: string;
  increasedConversions: string;
  readyToGetStarted: string;
  joinHundredsOfDevelopers: string;
  requestAPIAccess: string;
  bookTechnicalDemo: string;
  fullName: string;
  workEmail: string;
  company: string;
  useCase: string;
  selectYourUseCase: string;
  designPlatform: string;
  mobileApp: string;
  other: string;
  sendRequest: string;
  yourName: string;
  yourCompanyName: string;
  startFreeTrial: string;
  contactUs: string;
  seeItForYourself: string;
  culminationQuantitativeResearch: string;

  // Collaborators Page
  collaborators: string;
  becomeCollaborator: string;
  joinOurNetwork: string;
  collaboratorHeroDescription: string;
  becomeDesignPartner: string;
  freeAndQuick: string;

  // Problem Section
  theProblem: string;
  problemDescription: string;
  deadEndDMs: string;
  deadEndDMsDescription: string;
  budgetlessCollectors: string;
  budgetlessCollectorsDescription: string;
  endlessPitching: string;
  endlessPitchingDescription: string;
  stylyUsersReady: string;
  stylyUsersDescription: string;

  // Opportunity Section
  collaboratorsStylyAdvantage: string;
  stylyAdvantageDescription: string;
  getDiscoveredBy: string;
  haveAIDesigns: string;
  haveAIDesignsDescription: string;
  knowStyleSpace: string;
  knowStyleSpaceDescription: string;
  activelyLooking: string;
  activelyLookingDescription: string;
  curatedMatchmaking: string;
  notJustLeadGeneration: string;

  // Benefits Section
  whatYoullGet: string;
  highIntentClients: string;
  highIntentClientsDescription: string;
  aiEducatedHomeowners: string;
  aiEducatedHomeownersDescription: string;
  globalVisibility: string;
  globalVisibilityDescription: string;
  officialBadge: "Official \"STYLY Certified\" Pro badge",
  officialBadgeDescription: string;
  directContact: string;
  directContactDescription: string;
  noCommissions: string;
  noCommissionsDescription: string;

  // Comparison Chart Section
  paymentBenefits: string;
  comparisonChart: string;
  traditionalAgencies: string;
  withoutAI: string;
  vs: string;
  styly: string;
  leadCost: string;
  monthlyLeadVolume: string;
  aiCompetency: string;
  marketPosition: string;
  serviceEvolution: string;
  designPreferenceUnderstanding: string;
  monthlyTraffic: string;
  globalReach: string;
  portfolioViewsOnline: string;
  clientBase: string;
  futureReadiness: string;
  joinStylyTransform: string;
  becomeCertifiedPro: string;

  // Premium Placement Section
  premiumPlacement: string;
  stylyHighlightPros: string;
  aiProjectExports: string;
  stylyNewsletters: string;
  proPartnerDirectory: string;
  goToNameWhen: string;
  couplesDisagree: string;
  realtorsWantStaging: string;
  homeownersNeedProfessional: string;

  // Application CTA Section
  readyToBeRecommended: string;
  inviteOnlyExperience: string;
  applyNow: string;
  questionsReachUs: string;
  orDMUs: string;

  // Social Proof Section
  joinGrowingNetwork: string;
  architectTokyo: string;
  interiorDesignerCapeTown: string;
  freelancerLisbon: string;
  socialProofDescription: string;

  // Discovery Card Section
  yourOwnDiscoveryCard: string;
  discoveryCardDescription: string;
  calmMinimalistSpaces: string;

  // Why Join Section
  whyJoinStyly: string;
  clientsWithVision: string;
  clientsWithVisionDescription: string;
  designOnYourTerms: string;
  designOnYourTermsDescription: string;
  builtInExposure: string;
  builtInExposureDescription: string;
  realCreativityAI: string;
  realCreativityAIDescription: string;
  forStudiosAndSolo: string;
  forStudiosAndSoloDescription: string;
  // How It Works Section
  collaboratorsHowItWorks: string;
  stepOne: string;
  stepOneDescription: string;
  stepTwo: string;
  stepTwoDescription: string;
  stepThree: string;
  stepThreeDescription: string;

  // Who We're Looking For Section
  whoWereLookingFor: string;
  interiorDesigners: string;
  architects: string;
  conceptualCreatives: string;
  spatialArtists: string;
  setDesigners: string;
  anyoneExploringSpace: string;
  quoteBlock: string;

  // Final CTA Section
  readyToJoin: string;
  readyToJoinDescription: string;
  collaboratorsApplyNow: string;
  learnMore: string;
  getStarted: string;

  // Application Form
  applicationForm: string;
  quickApplication: string;
  applyToJoinNetwork: string;
  fillOutForm: string;
  quickFormDescription: string;
  collaboratorFullName: string;
  collaboratorFullNamePlaceholder: string;
  emailAddress: string;
  emailPlaceholder: string;
  location: string;
  locationPlaceholder: string;
  portfolioLink: string;
  portfolioPlaceholder: string;
  specialization: string;
  selectSpecialization: string;
  interiorDesign: string;
  architecture: string;
  collaboratorOther: string;
  submitApplication: string;
  submitting: string;
  collaboratorsClose: string;
  cancel: string;

  // Form Validation
  fieldRequired: string;
  invalidEmail: string;
  invalidUrl: string;

  // Form Success/Error States
  applicationSubmitted: string;
  applicationSuccess: string;
  applicationError: string;
  tryAgain: string;

}
// Define translations for English and French
export const translations: Record<Language, Translations> = {
  en: {
    // Navbar
    pricing: "Pricing",
    blog: "Blog",
    signIn: "Sign In",

    // Add missing properties
    expertDesignTipsText: "Expert design tips to enhance your interiors.",
    japaneseMinimalism: "Japanese Minimalism",
    japaneseMinimalismPrompt:
      "Japanese minimalism: clean lines, natural materials, serene ambiance...",
    prompt: "Enter your design preferences here...",

    // Add missing properties
    marketOverview: "Market Overview",
    eclecticFusion: "Eclectic Fusion",
    eclecticFusionPrompt:
      "Eclectic fusion: mix of styles, vibrant colors, unique objects...",
    minimalistZen: "Minimalist Zen",
    minimalistZenPrompt:
      "Minimalist Zen: clean lines, neutral palette, calming ambiance...",
    vintageCharm: "Vintage Charm",
    vintageCharmPrompt:
      "Vintage charm: antique furniture, classic details, warm atmosphere...",
    keywords:
      "Keywords: AI bedroom design, minimalist design, vintage design, eclectic design",
    followUsHere: "Follow Us Here!",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    facebook: "Facebook",

    // Hero section
    welcomeToFuture: "Welcome to the Future of Interior Design",
    mostUsedAITool: "#1 most used",
    aiDesignTool: "Free AI interior design app",
    for: "for",
    modernSpaces: "modern spaces",
    redesignEmptyRooms:
      "Transform empty spaces into styled interiors —",
    forRealEstate: "for real estate, virtual staging, and home design AI.",
    noToolsNoDownloads: "No tools, no downloads. Just results.",
    uploadPhoto: "Upload a Photo to Start",
    supporting: "Supporting",
    realEstatePros: "20,000+ real estate professionals, interior designers & homeowners using our AI interior design tool",

    // Unlock potential section
    designExcellence: "AI Interior Design Excellence",
    unlockThePotential: "UNLOCK THE POTENTIAL OF FREE AI INTERIOR DESIGN",
    aiDrawsInspiration:
      "Our free interior design software draws inspiration from legendary architects such as",
    legendaryArchitects:
      "Le Corbusier, Zaha Hadid, Frank Gehry, Frank Lloyd Wright, and Gaudi",
    experienceAdvancedAI:
      "Experience how our AI room planner and interior design AI transforms your design concepts into stunning reality.",
    explore: "Explore AI Room Design",

    // Architecture Revolution
    architectureRevolution: "AI INTERIOR DESIGN REVOLUTION",
    homeDesignByAI: "Home design AI, AI room planner and free AI interior design generator.",

    // ModernSpaces
    redesignRooms: "Redesign empty rooms into styled, market-ready interior —",
    forRealEstateRenovation: "for real estate, renovation, and retail.",
    noToolsJustResults: "No tools, no downloads. Just results.",

    // HowItWorks
    simpleProcess: "Simple Process with AI Interior Design",
    howItWorks: "How Our Free Interior Design Software Works",
    transformSpace:
      "Transform your space in three simple steps with our AI room planner and interior design AI generator",
    upload: "Upload",
    uploadDescription:
      "Simply upload your image or sketch of the space you want to transform with our AI interior design tool.",
    personalize: "Personalize",
    personalizeDescription:
      "Choose your preferences, from furniture selection to style, to create your ideal space with our AI room design.",
    furnitureSelection: "furniture",
    enjoy: "Enjoy",
    enjoyDescription:
      "Sit back and enjoy the end result with our free AI interior design and virtual staging.",
    aiForInteriorDesign: "AI for interior design",
    getStartedFree: "Get Started Free with AI Interior Design",
    noCreditCard: "No Credit Card Required, No Commitments",

    // Testimonials
    dontTakeOurWord: "Don't just take our word for it",
    hearFromCustomers:
      "Hear from some of our amazing customers who used our product.",

    // FAQ
    howItWorksFAQ: "How it works",
    faqs: "FAQs",
    faqDescription:
      "Everything you need to know about the product and billing.",
    faqQuestions: [
      {
        question: "What makes our free AI interior design app unique in the world of interior design?",
        answer:
          "Our AI room planner stands out by combining cutting-edge artificial intelligence with principles from legendary architects like <a href='https://www.archdaily.com/tag/le-corbusier' target='_blank' rel='noopener noreferrer' class='text-purple-600 hover:text-purple-800 underline'>Le Corbusier</a> and <a href='https://www.dezeen.com/tag/zaha-hadid/' target='_blank' rel='noopener noreferrer' class='text-purple-600 hover:text-purple-800 underline'>Zaha Hadid</a>. Our free interior design software requires no downloads or special tools, making professional AI interior design accessible to everyone from real estate professionals to homeowners using our interior design AI generator.",
      },
      {
        question:
          "Can anyone use our AI room design tool, or is it designed specifically for professionals?",
        answer:
          "Our free interior design software is designed for everyone! While it's powerful enough for real estate professionals and interior designers, it's also intuitive enough for homeowners and design enthusiasts with no prior experience. Our AI room planner with simple three-step process makes it accessible to users of all skill levels.",
      },
      {
        question:
          "How does our AI interior design tool assist users in visualizing their design ideas?",
        answer:
          "Simply upload a photo of your empty space, select your design preferences and style, and our interior design AI will transform it into a professionally designed interior with virtual staging. You can experiment with different styles, furniture arrangements, and color schemes until you find the perfect look for your space with our free AI interior design.",
      },
      {
        question:
          "Does our AI room planner offer a variety of interior design styles to choose from?",
        answer:
          "Absolutely! Our free interior design software offers a wide range of design styles from <a href='https://www.elledecor.com/design-decorate/room-ideas/g2441/modern-minimalist-decor/' target='_blank' rel='noopener noreferrer' class='text-purple-600 hover:text-purple-800 underline'>modern minimalist</a> to classic traditional, industrial, <a href='https://www.architecturaldigest.com/gallery/scandinavian-design-ideas' target='_blank' rel='noopener noreferrer' class='text-purple-600 hover:text-purple-800 underline'>Scandinavian</a>, mid-century modern, and many more. You can also customize elements within each style with our interior design AI generator to create a unique look that perfectly matches your AI room design vision.",
      },
      {
        question: "What kind of support does our AI interior design tool provide to its users?",
        answer:
          "We offer comprehensive support including video tutorials, a detailed knowledge base, and responsive customer service for our free AI interior design. Our team is available to help with any questions or challenges you might encounter while using our AI room planner and virtual staging. Plus, our <a href='/blog' class='text-purple-600 hover:text-purple-800 underline'>blog</a> regularly features interior design tips and inspiration from leading sources like <a href='https://www.houzz.com/ideabooks' target='_blank' rel='noopener noreferrer' class='text-purple-600 hover:text-purple-800 underline'>Houzz</a>.",
      },
    ],

    // VideoSection
    seeItInAction: "See it in action",
    videoDescription: "See how our AI platform transforms interior design with just a few clicks",
    watchDemo: "Watch the demo",

    // SupportedBy
    supportedBy: "Supported by",

    // MarketSegmentCarousel
    tailoredSolutionsForEveryNeed: "Tailored AI Interior Design Solutions For Every Need",
    aiDesignToolServesDiverseMarkets:
      "Our free interior design software and AI room planner serve diverse market segments with specialized features",
    realEstateProfessionals: "REAL ESTATE PROFESSIONALS",
    homeownersRenters: "HOMEOWNERS & RENTERS",
    startupsTechCreators: "STARTUPS & TECH-SAVVY CREATORS",
    interiorDesignersArchitects: "INTERIOR DESIGNERS & ARCHITECTS",
    retailersBrands: "RETAILERS & BRANDS",
    wallpaperBrands: "WALLPAPER BRANDS",
    wallpaperFlooringBrands: "WALLPAPER & FLOORING BRANDS",
    flooringBrands: "FLOORING BRANDS",

    // Footer links
    footerCompany: "Company",
    footerAbout: "About",
    footerFeatures: "Features",
    footerPricing: "Pricing",
    footerContact: "Contact",
    footerLegal: "Legal",
    footerTerms: "Terms",
    footerPrivacy: "Privacy",
    footerCopyright: "© 2024 STYLY. All rights reserved.",
    footerSlogan: "making premium design accessible, sustainable, and enjoyable for everyone.",
    footerLogin: "Log In",
    footerSignup: "Sign Up",
    footerCopyrightYear: "Copyright 2025 STYLY",
    footerVideoGuide: "Video Guide",
    footerCookieSettings: "Cookie Settings",
    footerBlog: "Blog",

    // Cookie Settings popup
    cookieSettingsTitle: "Cookie Settings",
    cookieSettingsDescription: "We use cookies to enhance your experience on our website. You can choose which types of cookies to accept.",
    essentialCookies: "Essential Cookies",
    essentialCookiesDescription: "These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you.",
    analyticsCookies: "Analytics Cookies",
    analyticsCookiesDescription: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    marketingCookies: "Marketing Cookies",
    marketingCookiesDescription: "These cookies are used to deliver advertisements more relevant to you and your interests.",
    acceptAll: "Accept All",
    acceptSelected: "Accept Selected",
    rejectAll: "Reject All",
    close: "Close",

    // Terms of Service page
    termsOfService: "General Terms and Conditions of Use",
    termsLastUpdated: "Last updated: January 2025",
    legalNotice: "I. Legal Notice",
    legalNoticeContent: "The Styly mobile and web application and the website styly.io are developed and published by ODK. The company's registered address is: 14 Rue Jean Jaurès, 92800, France.",
    hosting: "II. Hosting",
    hostingContent: "The servers used by the Styly application are hosted by Amazon Web Services (AWS). The website styly.io is hosted by Hostinger. Styly.io reserves the right to modify or delete all or part of the site and/or the Styly application without prior notice. Styly.io cannot be held liable to users or any third party for any modification of the Service and/or website. By continuing to use the application and/or website, you fully accept these Terms and Conditions of Use. The version currently online is the only one applicable until replaced.",
    definitions: "1. Definitions",
    definitionsContent: "General Terms and Conditions of Use (GTU): This document outlining the rights and obligations of the parties. Personal Data: Data identifying or making it possible to identify an individual, directly or indirectly, under GDPR. Intellectual Property Rights: All rights related to copyrights, trademarks, patents, trade secrets, domain names, etc. License: Limited right to use the intellectual property strictly to access and use the Service. Parties: All users of the Product. Product: The Styly application, the website, and all components. Service: The application and/or website and their content and functionality. Site: The website accessible at https://styly.io. Application: The Styly mobile app. User(s): Any person using the Service.",
    generalConditions: "2. General Conditions",
    article1: "Article 1 – Access to the Service",
    article1Content: "The Service is free to access. Users must not misuse the Service or extract data for unrelated purposes, such as spamming or developing competing services.",
    article2: "Article 2 – Intellectual Property",
    article2Content: "All content on the Service (text, visuals, code, media, etc.) is protected by intellectual property law. Styly.io grants a non-transferable, non-exclusive License for use of the Service. No element of the Service may be copied or reused without prior written consent from Styly.io.",
    article3: "Article 3 – Service Management",
    article3Content: "Styly.io reserves the right to: Limit, suspend, or restrict access to the Service; Remove content that disrupts functionality or violates laws; Interrupt the Service for maintenance or updates.",
    article4: "Article 4 – Liability",
    article4Content: "Styly.io makes no guarantees about the accuracy, completeness, or reliability of the Service. Users are responsible for monitoring updates and securing their own devices and data. Styly.io is not liable for: Service interruptions; Third-party claims resulting from a User's use of the Service; Technical or legal issues arising from misuse of the Service. Users must indemnify Styly.io if legal action is taken due to their actions.",
    article5: "Article 5 – External Links",
    article5Content: "Styly.io is not responsible for the content or reliability of any third-party websites or applications linked from the Service.",
    article6: "Article 6 – Personal Data",
    article6Content: "Styly.io collects and processes Personal Data in accordance with applicable laws. For more information, Users should consult the Privacy Policy and Cookie Policy. By continuing to use the Service, Users consent to the use of cookies.",
    article7: "Article 7 – Prohibited Uses",
    article7Content: "Users are prohibited from using the Service for: Unlawful activities; Infringing on intellectual property; Harassment or discrimination; Collecting personal data; Hacking, phishing, scraping, or spamming; Any immoral or obscene purposes; Circumventing security features. Styly.io reserves the right to terminate access for any breach of these rules.",
    article8: "Article 8 – User Accounts",
    article8Content: "To access the Service, Users must register using Apple Sign-In. Users are responsible for their own login credentials and activity. The Service uses AI to generate interior designs from photos, available in 'creative' or 'home staging' modes.",
    article9: "Article 9 – Content Rights and Usage",
    article9Content: "Styly.io holds all intellectual property rights over the content it shares. Users must: Respect third-party image and moral rights; Credit authorship where necessary; Request permission for any use of protected content. If disputes arise, all parties must cooperate fully with Styly.io in legal proceedings.",
    article10: "Article 10 – Severability",
    article10Content: "If any clause in these GTU is found to be unenforceable, the remaining clauses remain valid and enforceable.",
    article11: "Article 11 – Governing Law and Jurisdiction",
    article11Content: "These GTU are governed by French law. Exclusive jurisdiction is assigned to the courts of Bordeaux, including for emergency or multi-party proceedings.",
    article12: "Article 12 – Modification of Terms",
    article12Content: "Styly.io reserves the right to update these GTU at any time. Users are responsible for checking updates. Continued use of the Service implies acceptance of the latest version.",
    article13: "13. Free Trial, Paid Plan, and No Refund Policy",
    article13Content: "Styly.io provides comprehensive terms for trial and paid services with a strict no-refund policy.",
    freeTrial: "13.1 – Free Trial",
    freeTrialContent: "Styly.io provides a Free Trial to help Users evaluate the Service. The length and limits of the trial are clearly indicated. Users are responsible for assessing whether the Service meets their needs during this trial period. Access to premium features ends once the trial expires unless a Paid Plan is selected.",
    paidPlan: "13.2 – Paid Plan",
    paidPlanContent: "By subscribing to a Paid Plan: Users agree to the pricing, billing cycle, and scope of services offered; Charges are made in advance and are due regardless of actual usage; It is the User's responsibility to manage cancellations to avoid automatic renewals.",
    noRefundPolicy: "13.3 – No Refund Policy",
    noRefundPolicyContent: "All purchases and payments made to Styly.io are final and non-refundable. This includes, but is not limited to: Dissatisfaction with the Service; Mistaken or duplicate purchases; Lack of usage; Forgetting to cancel a subscription. Styly.io is under no obligation to process refunds via email, customer support, or payment providers. By using the Service and subscribing to a Paid Plan, Users accept this strict no-refund policy.",
    userResponsibility: "13.4 – User Responsibility",
    userResponsibilityContent: "Users are responsible for: Evaluating the Free Trial before subscribing; Understanding the features and billing conditions; Managing their account and payment settings. Styly.io disclaims all responsibility for misuse, oversight, or misinterpretation by the User.",

    // Privacy Policy page
    privacyPolicy: "Privacy Policy of Styly.io",
    privacyLastUpdated: "Last updated: 25.04.2025",
    privacyIntro: "Introduction",
    privacyIntroContent: "This Privacy Policy describes how Styly.io ('we', 'our', or 'us') collects, uses, and protects your personal information when you use our AI-powered interior design platform. We are committed to protecting your privacy and complying with the General Data Protection Regulation (GDPR) and other applicable data protection laws.",
    dataWeCollect: "1. Data We Collect",
    dataWeCollectContent: "We collect different types of data to provide and improve our services:",
    accountData: "Account Data",
    accountDataContent: "When you create an account, we collect your email address, name, and authentication information through Apple Sign-In. This data is necessary to provide you with access to our services and manage your account.",
    stylyImageData: "Styly Image Data",
    stylyImageDataContent: "We collect and process images you upload to our platform for AI-powered interior design generation. This includes the original images you provide and the AI-generated design outputs we create for you.",
    browsingData: "Browsing Data",
    browsingDataContent: "We automatically collect certain information about your device and how you interact with our platform, including IP address, browser type, device information, usage patterns, and cookies.",
    howWeUseData: "2. How We Use Your Data",
    howWeUseDataContent: "We use your personal data for the following purposes, based on the legal grounds specified:",
    purposeLegalBasisTable: "Purpose and Legal Basis Table",
    tableHeaderPurpose: "Purpose",
    tableHeaderLegalBasis: "Legal Basis",
    tablePurpose1: "Provide AI interior design services",
    tableLegalBasis1: "Contract performance",
    tablePurpose2: "Account management and authentication",
    tableLegalBasis2: "Contract performance",
    tablePurpose3: "Platform improvement and analytics",
    tableLegalBasis3: "Legitimate interest",
    tablePurpose4: "Customer support",
    tableLegalBasis4: "Contract performance",
    tablePurpose5: "Marketing communications (with consent)",
    tableLegalBasis5: "Consent",
    whoHasAccess: "3. Who Has Access to Your Data",
    whoHasAccessContent: "We may share your personal data with the following parties under specific circumstances:",
    authorities: "Authorities",
    authoritiesContent: "We may disclose your data to law enforcement, regulatory authorities, or other government agencies when required by law, court order, or to protect our rights and safety.",
    thirdPartyProviders: "Third-Party Service Providers",
    thirdPartyProvidersContent: "We work with trusted service providers who help us operate our platform, including cloud hosting services (AWS), authentication services (Apple), and analytics providers. These providers are contractually bound to protect your data.",
    dataRetention: "4. Data Retention",
    dataRetentionContent: "We retain your personal data for different periods depending on the type of data and purpose:",
    retentionAccount: "Account Data",
    retentionAccountContent: "Retained for the duration of your account plus 3 years after account deletion for legal and business purposes.",
    retentionImages: "Image Data",
    retentionImagesContent: "Original uploaded images are deleted after 30 days. AI-generated designs are retained for 1 year unless you request earlier deletion.",
    retentionBrowsing: "Browsing Data",
    retentionBrowsingContent: "Analytics and usage data is retained for 2 years for platform improvement purposes.",
    internationalTransfers: "5. International Transfers",
    internationalTransfersContent: "Your data may be transferred to and processed in countries outside the European Economic Area (EEA). We ensure appropriate safeguards are in place, including Standard Contractual Clauses and adequacy decisions, to protect your data in accordance with GDPR requirements.",
    dataSecurity: "6. Data Security",
    dataSecurityContent: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, regular security assessments, and staff training on data protection.",
    yourRights: "7. Your Rights",
    yourRightsContent: "Under GDPR, you have the following rights regarding your personal data:",
    rightAccess: "Right of access: Request copies of your personal data",
    rightRectification: "Right to rectification: Request correction of inaccurate data",
    rightErasure: "Right to erasure: Request deletion of your data",
    rightRestriction: "Right to restrict processing: Limit how we use your data",
    rightPortability: "Right to data portability: Receive your data in a portable format",
    rightObject: "Right to object: Object to processing based on legitimate interests",
    rightWithdrawConsent: "Right to withdraw consent: Withdraw consent for marketing communications",
    rightComplaint: "Right to lodge a complaint: Contact your local data protection authority",
    privacyChanges: "8. Changes to This Privacy Policy",
    privacyChangesContent: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the 'Last updated' date. Your continued use of our services after such changes constitutes acceptance of the updated policy.",
    privacyContact: "9. Contact",
    privacyContactContent: "If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at contact@styly.io. We will respond to your request within 30 days as required by GDPR.",

    // Stats section
    statsHeading1: "STYLY: Not chance, but the culmination of",
    statsHeading2: "rigorous quantitative research.",
    statsHours: "Hours of development",
    statsDesigners: "Top Designers approved",
    statsCompanies: "Companies trusted",
    statsArticles: "Research articles",

    // Blog section
    blogTrends: "Blogs",
    blogDescription:
      "The latest industry news, interviews, technologies, and resources on free interior design software and AI room planner.",
    realEstateLandscape:
      "The real estate landscape has fundamentally transformed since 2023",
    generationalTrendsReport: "Generational Trends Report",
    buyersBeginSearch:
      "an overwhelming 99% of home buyers begin their search online, making digital presentation not just important but critical for sales success.",
    virtualStagingRevolution:
      "The Virtual Staging Revolution: Current Market Statistics",
    propertiesWithAIStaging:
      "Properties with AI virtual staging receive 2.7x more inquiries than traditional listings",
    virtuallyStagedSellFaster:
      "Virtually staged properties sell 31% faster than non-staged homes",
    aiStagingCostReduction:
      "AI staging delivers 98% cost reduction compared to physical staging",
    propertiesWithAIEnhancedPhotos:
      "Properties with AI-enhanced photos command 5–8% higher selling prices",
    buyersStruggleToVisualize:
      "92% of buyers struggle to visualize potential in empty spaces",
    source: "Source:",
    realEstateStagingAssociation:
      "Real Estate Staging Association 2025 Impact Report",
    whyAIStagingIndustryStandard:
      "Why AI-Powered Virtual Staging is Now Industry Standard",
    economicEfficiency: "Economic Efficiency",
    economicEfficiencyDescription:
      "In 2025's fluctuating real estate market, traditional physical staging averages $3,500–$10,000 per property, while AI-powered virtual staging with Styly.io starts at less than $100 per property.",
    speedToMarket: "Speed-to-Market Advantage",
    speedToMarketDescription:
      "With Styly.io, I can have professionally staged photos ready within an hour of the photographer delivering raw images.",
    marketSpecificCustomization: "Market-Specific Customization",
    marketSpecificCustomizationDescription:
      "Current AI virtual staging allows agents to target specific buyer demographics with tailored designs, adjust staging based on real-time market feedback, create seasonal variations, and generate multiple design options for diverse buyer preferences.",
    targetSpecificBuyerDemographics:
      "Target specific buyer demographics with tailored designs",
    adjustStagingRealTimeFeedback:
      "Adjust staging based on real-time market feedback",
    createSeasonalVariations:
      "Create seasonal variations to keep listings fresh",
    generateDesignOptions:
      "Generate multiple design options for diverse buyer preferences",
    realWorldSuccessStories: "Real-World Success Stories from 2025",
    caseStudy1Title: "Case Study 1: Mixed-Use Development in Austin",
    caseStudy1Property: "Property: 12-unit new construction, completely empty",
    caseStudy1Challenge: "Challenge: Needed to pre-sell 60% before completion",
    caseStudy1Solution:
      "Solution: AI-staged with Styly.io showing multiple configuration options",
    caseStudy1Result: "Result: 75% pre-sold within 45 days",
    caseStudy2Title: "Case Study 2: Historic Renovation Project",
    caseStudy2Property:
      "Property: 1920s craftsman requiring significant updates",
    caseStudy2Challenge:
      "Challenge: Buyers couldn't visualize modern possibilities",
    caseStudy2Solution:
      "Solution: Virtual renovation showcasing contemporary interior while preserving character",
    caseStudy2Result: "Result: Sold at 12% above neighborhood comps",
    agentImplementationTitle:
      "How Leading Agents Are Implementing AI Staging in 2025",
    segmentedMarketingApproaches: "Segmented Marketing Approaches",
    segmentedMarketingDescription:
      "Today's sophisticated agents use Styly.io to create targeted presentations for various buyer demographics.",
    emptyNesterDownsizing: "Empty-nester downsizing designs",
    firstTimeHomebuyer: "First-time homebuyer configurations",
    workFromHomeLayouts: "Work-from-home optimized layouts",
    multigenerationalLiving: "Multigenerational living arrangements",
    renovationVisualizationTitle: "Renovation Visualization",
    renovationVisualizationDescription:
      "With construction costs at all-time highs, agents are showing potential through renovation visualization.",
    energyEfficientUpgrades: "Energy-efficient upgrades with projected savings",
    spaceReconfiguration: "Space reconfiguration possibilities",
    modernUpdates: "Modern updates to dated properties",
    accessibilityModifications: "Accessibility modifications",
    digitalMarketingIntegration: "Digital-First Marketing Integration",
    digitalMarketingDescription:
      "Properties staged with Styly.io in 2025 are seeing significantly higher engagement on social platforms.",
    higherEngagement: "53% higher engagement on social platforms",
    longerTimeSpent: "2.2x longer time spent on listing pages",
    moreSavedListings: "40% more saved/favorited listings",
    higherQualityLeads: "Significantly higher quality leads",
    currentMarketAnalysis: "Current Market Analysis and Projections",
    marketAnalysisDescription:
      "According to McKinsey & Company's 2025 Real Estate Technology Report:",
    realEstateTechReport: "Real Estate Technology Report",
    aiStagingAdoption:
      "AI staging adoption has reached 78% among successful agents",
    luxuryPropertiesUseAI:
      "94% of luxury properties now use AI staging as standard practice",
    virtualStagingMarketGrowth:
      "The virtual staging market has grown 87% since 2023",
    declineOfPhysicalStaging:
      "Traditional physical staging services have declined by 35%",
    evidenceBasedBestPractices: "Evidence-Based Best Practices for 2025",
    strategicApplication: "Strategic Application",
    marketResponsiveDesign: "Market-Responsive Design",
    highResolutionImages: "Wide-angle, high-resolution images",
    consistentHeightPerspective: "Consistent height and perspective",
    cleanSpacesForAI: "Empty, clean spaces for optimal AI processing",
    focusOnProblematicSpaces: "Focus on problematic spaces first",
    showcaseVersatility: "Showcase versatility in primary rooms",
    demonstrateLifestylePossibilities: "Demonstrate lifestyle possibilities",
    researchLocalPreferences: "Research local buyer preferences",
    alignWithDesignTrends: "Align with current design trends",
    considerPropertyElements:
      "Consider property-specific architectural elements",
    expertAnalysis: "Expert Analysis",
    expertAnalysisQuote:
      '"The question is no longer whether to use AI staging, but how to use it most effectively."',
    the2025Reality: "The 2025 Reality",
    aiStagingEmbeddedInPractice:
      "AI-powered virtual staging is now firmly embedded in successful real estate practice.",
    transformRealEstateBusiness: "Transform Your Real Estate Business Today",
    experienceAIAdvantage:
      "Experience the real market advantage of AI-powered virtual staging with Styly.io.",
    meetBuyerExpectations: "Meet modern buyer expectations",
    maximizePropertyValues: "Maximize property values in any market",
    reduceDaysOnMarket: "Reduce days-on-market",
    scaleMarketingEfforts: "Scale marketing efforts efficiently",
    deliverConsistentPresentation:
      "Deliver consistent, professional presentation",
    realEstateVirtualStaging:
      "Gen Z's Ultimate Guide to Instagram-Worthy Interiors",
    howRealEstateAgentsBoostSales:
      "How Real Estate Agents Are Boosting Sales with AI-Powered Virtual Staging: The 2025 Market Reality",
    genZUltimateGuideToInteriors:
      "Gen Z's Ultimate Guide to Instagram-Worthy Interiors",
    howToBuildYourHouse:
      "How to Build Your Own House with AI Tools Including Porch Design",
    ultimateGuideToAIInteriorDesign:
      "The Ultimate Guide to AI Interior Design Tools in 2025: A Comprehensive Comparison",
    eightStunningAIBedroomDesigns:
      "Eight Stunning AI-Generated Bedroom Designs: Transform Your Space with Styly.io",
    expertTipsOnHomeInteriors:
      "10 Expert Tips to Save Big on Home Interiors in 2025",

    // Blog post titles for French translation
    realEstateAgentsAIVirtualStagingTitle:
      "How Real Estate Agents Are Boosting Sales with AI-Powered Virtual Staging: The 2025 Market Reality",
    genZInstagramWorthyInteriorsTitle:
      "Gen Z's Ultimate Guide to Instagram-Worthy Interiors",
    buildHouseAIToolsPorchDesignTitle:
      "How to Build Your Own House with AI Tools Including Porch Design",
    ultimateGuideAIInteriorDesignTitle:
      "The Ultimate Guide to AI Interior Design Tools in 2025: A Comprehensive Comparison",
    eightStunningAIBedroomDesignsTitle:
      "Eight Stunning AI-Generated Bedroom Designs: Transform Your Space with Styly.io",
    expertTipsHomeInteriorsTitle:
      "10 Expert Tips to Save Big on Home Interiors in 2025",

    // New blog post titles
    top5ChallengesInteriorDesignTitle: "Top 5 Challenges in Interior Design and How AI Can Solve Them",
    commercialInteriorDesignAITitle: "How AI is Shaping the Future of Commercial Interior Design",
    creatingOutdoorSpacesAITitle: "Creating Outdoor Spaces with AI: A Guide to Designing Stunning Exteriors",
    costEffectivenessAIDesignTitle: "The Cost-Effectiveness of AI in Design: How Styly Saves You Money",
    transformingSmallLivingSpacesTitle: "Transforming Small Living Spaces: Interior Design Solutions for Compact Homes",
    aiDrivenCustomizationFutureTitle: "Why AI-Driven Customization is the Future of Interior Design",
    residentialInteriorDesignGuideTitle: "Residential Interior Design: A Guide to Planning Spaces with Styly",
    futuristicInteriorDesignStylesTitle: "Futuristic Interior Design Styles: How Styly AI Shapes Tomorrow's Homes Today",
    roomPlannerAISarahJohnsonEvaluationsTitle: "The Good, The Bad, and The Room Planner AI: Sarah Johnson's Honest Styly.io Evaluations",
    innovativeStairRailingIdeasTitle: "Innovative Interior Stair Railing Ideas: Custom Designs Powered by Styly AI",
    designLivingRoomLikeProTitle: "Design Your Living Room Like a Pro with Styly",
    futureWorkspaceAIOfficeInteriorsTitle: "Designing the Future Workspace: AI-Powered Office Interiors with Styly",
    newBlog2Title: "Designing AI Interior Staging on AWS: Behind the Scenes at Styly",
    generativeAIRevolutionizingDesignTitle: "How Generative AI is Revolutionizing Interior Design?",
    aiAssistantInteriorDesignPromptsTitle: "AI Assistant in Interior Design - Best Prompts for ChatGPT, Gemini, Mistral",
    stylyVivaTechPartnershipTitle: "How Styly & Viva Technology Are Shaping the Future of AI-Powered Design",
    chatGPTInteriorDesignTitle: "Can ChatGPT Design Your Home? Exploring AI's Role in Interior Design",
    unlockingPowerAIInteriorDesignTitle: "Unlocking the Power of AI for Interior Design: Your Guide to the Latest Innovations",
    footerTrademark: "styly.io® and styly® are registered trademarks of styly.io, Inc. All rights reserved.",

    // New Keys for Market Leaders
    foyr: "Foyr",
    knownForCommercialApplications: "Known for commercial applications",
    palette: "Palette",
    focusesOnColorHarmony: "Focuses on color harmony",
    pablo: "Pablo",
    specializesInLightingDesign: "Specializes in lighting design",

    // New Keys for Emerging Innovators
    reroomAI: "Reroom AI",
    notableForRenovationProjects: "Notable for renovation projects",
    promeAI: "PromeAI",
    specializesInTextureGeneration: "Specializes in texture generation",

    // Styly Advantage
    realTimeStyleTransferTechnology: "Real-time style transfer technology",
    advancedMaterialRecognition: "Advanced material recognition",
    intelligentSpaceOptimization: "Intelligent space optimization",

    // Performance Metrics
    timeSaved: "Time saved",
    reductionInInitialDesignPhase: "reduction in initial design phase",
    clientSatisfactionRates: "Client satisfaction rates",
    positiveFeedback: "positive feedback",
    costReduction: "Cost reduction",
    averageSavingsInProjectPlanning: "average savings in project planning",

    // Case Study
    reduceDesignIterationTime: "Reduce design iteration time",
    cutDesignCosts: "Cut design costs",

    // Future Trends
    integrationOfARVRTechnologies: "Integration of AR/VR technologies",
    sustainableDesignAutomation: "Sustainable design automation",

    // Expert Perspectives
    aiToolsAreNotReplacingDesigners:
      "AI tools are not replacing designers; they're empowering them to be more creative and efficient",

    // Making the Right Choice
    yourSpecificNeedsAndUseCases: "Your specific needs and use cases",
    budgetConstraints: "Budget constraints",

    // Conclusion
    whileEachPlatformOffersUniqueAdvantages:
      "While each platform offers unique advantages",
    emergesAsAComprehensiveSolution:
      "emerges as a comprehensive solution that combines powerful AI capabilities with user-friendly features",
    keyEvaluationCriteria: "Key Evaluation Criteria",
    marketLeaders: "Market Leaders",
    emergingInnovators: "Emerging Innovators",
    stylyAdvantage: "Styly Advantage",
    performanceMetrics: "Performance Metrics",
    caseStudy: "Case Study",
    futureTrends: "Future Trends",
    expertPerspectives: "Expert Perspectives",
    makingTheRightChoice: "Making the Right Choice",
    conclusion: "Conclusion",

    // Table of Contents
    tableOfContents: "Table of Contents:",
    introduction: "Introduction",
    aiInBedroomDesign: "AI in Bedroom Design",
    stylyioOverview: "Styly.io: Your AI-Powered Bedroom Design Companion",
    eightAIPoweredBedroomDesigns: "Eight AI-Powered Bedroom Designs",
    expertDesignTips: "Expert Design Tips",

    // Introduction
    introductionText:
      "Bedrooms are our sanctuaries. According to the National Sleep Foundation, we spend about one-third of our lives there. It's vital to create a space that fosters both comfort and style. AI tools like Styly.io are changing the game in bedroom design.",

    // AI in Bedroom Design
    aiInBedroomDesignText:
      "A recent study from Interior Design magazine found AI tools cut down initial concept time by 60%. This gives designers more room to personalize and perfect their designs.",

    // Styly.io Overview
    stylyioOverviewText:
      "Whether you're a designer or a homeowner, Styly.io helps you create beautiful bedroom spaces with ease. It combines advanced AI with intuitive design.",

    // Eight AI-Powered Bedroom Designs
    scandinavianSerenity: "Scandinavian Serenity",
    scandinavianBedroomPrompt:
      "Scandinavian bedroom: minimalist design, light wood furniture, white walls, natural light...",
    modernLuxurySuite: "Modern Luxury Suite",
    modernLuxurySuitePrompt:
      "Contemporary luxury bedroom: high ceilings, champagne metallic details, smart lighting...",
    coastalRetreat: "Coastal Retreat",
    coastalBedroomPrompt:
      "Coastal bedroom: soft blues and sandy beiges, sheer curtains, beach vibes...",
    urbanIndustrial: "Urban Industrial",
    urbanIndustrialPrompt:
      "Industrial chic: exposed brick, steel-frame windows, leather accents...",
    bohemianDreams: "Bohemian Dreams",
    bohemianDreamsPrompt:
      "Boho vibes: macramé, plants, vintage rug, cozy lighting...",
    japaneseZen: "Japanese Zen",
    japaneseZenPrompt:
      "Japanese minimalist: tatami mats, bamboo accents, peaceful harmony...",
    midCenturyModern: "Mid-Century Modern",
    midCenturyModernPrompt:
      "Mid-century modern: walnut, geometric patterns, iconic pieces...",
    contemporaryGlam: "Contemporary Glam",
    contemporaryGlamPrompt:
      "Glamorous style: velvet headboard, crystal lighting, mirrored furniture...",

    // Expert Design Tips
    considerNaturalLight: "Consider natural light when choosing colors",
    ensureWalkableSpace: "Ensure walkable space around furniture",
    layerLighting: "Layer lighting for flexibility",
    includeHiddenStorage: "Include hidden or built-in storage",
    useCalmingMaterials: "Use calming, sleep-promoting materials",

    // Negative Prompt Guidelines
    negativePromptGuidelines: "Negative Prompt Guidelines",
    avoidClutter: "Avoid overcrowded or cluttered layouts",
    keepLightingNatural: "Keep lighting consistent and natural-looking",
    stickToDesignStyle: "Stick to a unified design style",
    maintainProportions: "Maintain proper scale and proportion",

    // Sources and Research
    sourcesAndResearch: "Sources and Research",
    nationalSleepFoundation: "National Sleep Foundation",
    interiorDesignMagazine: "Interior Design Magazine",
    asidAnnualReport: "ASID Annual Report",
    harvardHealthSleepStudies: "Harvard Health Sleep Studies",

    // Conclusion
    conclusionText:
      "With Styly.io, you can design your bedroom exactly how you imagine it. From calm Scandinavian vibes to glamorous hotel-like luxury, the power is in your hands—backed by smart AI.",

    creatingTrendySpaces:
      "Creating Trendy Spaces: The Gen Z Guide to Instagram-Worthy Interiors",
    introductionText1:
      "If there's one generation redefining self-expression through personal spaces, it's Gen Z. Armed with a camera phone, sharp aesthetic preferences, and a wide social media audience, this generation knows how to create and showcase enviable Instagram-worthy interiors.",
    introductionText2:
      "But how do you design a space that's trendy, personal, AND ready for the camera? This guide has you covered. Whether you're creating an unforgettable feed or just want to spruce up your space, we'll help you craft the perfect Instagram-worthy interior.",
    understandingAestheticPreferences:
      "Understanding Gen Z's Aesthetic Preferences",
    aestheticPreferencesText:
      "Gen Z isn't satisfied with cookie-cutter designs. They're blending bold aesthetics, nostalgic touches, and functionality to make their spaces truly unique.",
    colorPalettes: "Color Palettes",
    colorPalettesText:
      "Gen Z gravitates toward vibrant color combinations. Think sage green, lavender, muted pinks, and splashes of bold yellows or blues. Their preference? Personalizing spaces with colors that reflect individuality while keeping a cozy vibe.",
    eclecticFurnitureAndDecor: "Eclectic Furniture and Decor",
    eclecticFurnitureAndDecorText:
      "Instead of mainstream furniture collections, Gen Z hunts for unique vintage finds, second-hand treasures, and quirky accent pieces. It's style-meets-sustainability on a budget.",
    minimalistMeetsMaximalist: "Minimalist Meets Maximalist",
    minimalistMeetsMaximalistText:
      "Gen Z decorates on one extreme or the other. Some lean into minimalist Nordic styles with clean lines and whites, while others go full maximalist with layered textures, bold patterns, and curated clutter that feels intentional.",
    keyElementsOfInstagramWorthyInterior:
      "Key Elements of an Instagram-Worthy Interior",
    instagramWorthyDefinition:
      "What defines \"Instagram-worthy\"? It's all about creating that wow factor. These elements can make any room pop both in real life and on camera:",
    naturalLighting: "Natural Lighting",
    naturalLightingText:
      "Lighting can make or break your photos. Large windows, sheer curtains, and strategically placed mirrors maximize the natural light. Think soft and diffused, not harsh.",
    accentWalls: "Accent Walls",
    accentWallsText:
      "From funky wallpaper to a gallery of art, accent walls are a striking focal point. Popular choices include geometric murals, DIY photo walls, and plant-covered walls.",
    statementPieces: "Statement Pieces",
    statementPiecesText:
      "Maybe it's a retro velvet couch or a neon sign above the bed. Statement pieces anchor the room's aesthetics and create visual interest.",
    greeneryAndPlants: "Greenery and Plants",
    greeneryAndPlantsText:
      "Every Instagram-worthy room has some green. From lush monstera leaves to hanging ivy, plants bring vibrancy and life to a space.",
    layeredTextures: "Layered Textures",
    layeredTexturesText:
      "Think soft rugs, chunky blankets, fluffy pillows, and textured wallpapers. Layering textures adds depth, making the room feel both visually dynamic and cozy.",
    declutteredVisuals: "Decluttered Visuals",
    declutteredVisualsText:
      "While Gen Z embraces curated chaos, clutter that's well-organized is key. Decorative baskets, minimalist shelves, and hidden storage keep the scene crisp and clean for the camera.",
    incorporatingSustainabilityAndTechnology:
      "Incorporating Sustainability and Technology",
    sustainabilityTechText:
      "Gen Z doesn't just care about aesthetics—they care about the planet and staying connected. Here's how they integrate sustainability and smart tech into their designs:",
    sustainableMaterials: "Sustainable Materials",
    sustainableMaterialsText:
      "Eco-conscious design is non-negotiable for this generation. Think recycled wood furniture, bamboo decor, and upcycled pieces from thrift stores. They prioritize ethical choices over fast furniture trends.",
    smartHomeTechnology: "Smart Home Technology",
    smartHomeTechnologyText:
      "Integrating tech like voice-controlled lights, smart speakers, and app-enabled air purifiers is common. Tools like home decor AI free platforms, like Styly's AI room planner, make designing a breeze.",
    multiFunctionalFurniture: "Multi-functional Furniture",
    multiFunctionalFurnitureText:
      "Small spaces are optimized with dual-purpose furniture—think storage ottomans, foldable desks, and Murphy beds. It's trendy AND practical.",
    caseStudiesAndExamples: "Case Studies and Real-Life Examples",
    caseStudyIntro:
      "What makes a space Insta-famous? Here are some standout examples of interiors that broke the algorithm:",
    economicEfficiencyText:
      "A small apartment oozing coziness with a jungle of hanging plants, vintage furniture, and muted tones. Pro Tip? Use contrasting pots for your plants!",
    geometricDreamBedroom: "Geometric Dream Bedroom",
    geometricDreamBedroomText:
      "Featuring pastel-colored geometric wall designs paired with minimal shelves, this room exemplifies Gen Z's blend of minimalist decor with bold personal statements.",
    cafeInspiredKitchenNook: "Café-Inspired Kitchen Nook",
    cafeInspiredKitchenNookText:
      "A kitchen with industrial bar stools, subway tiles, and niche coffee setups has been a hit, with some posts getting hundreds of thousands of likes.",
    bohoOutdoorBalcony: "Boho Outdoor Balcony",
    bohoOutdoorBalconyText:
      "Think rattan chairs, fairy lights, and layered outdoor rugs. It's cozy, budget-friendly, and becomes an instant nighttime photo favorite.",
    diyInstagramWorthyMakeovers: "Tips for DIY Instagram-Worthy Makeovers",
    diyTipsIntro:
      "Want to recreate one of these stunning spaces? With a little creativity and effort, you can. Here are some affordable DIY tips:",
    startWithMoodBoard: "Start with a Mood Board",
    startWithMoodBoardText:
      "Use an AI room decorator like Styly's AI room design free tool. Upload images of your space, try different layouts, and find inspiration that suits your vibe.",
    maximizeWhatYouHave: "Maximize What You Have",
    maximizeWhatYouHaveText:
      "Rearrange existing furniture to see your room in a new light. Sometimes shifting a couch or bed to another spot can transform the room.",
    getCreativeWithPaint: "Get Creative With Paint",
    getCreativeWithPaintText:
      "A can of paint goes a long way! Create accents or frames on walls with bold shapes or opt for a monochromatic corner in one shade.",
    thriftForJewels: "Thrift for Jewels",
    thriftForJewelsText:
      "Shop at local second-hand stores or antique markets for quirky finds, like retro chairs or vintage vases.",
    accessorizeThoughtfully: "Accessorize Thoughtfully",
    accessorizeThoughtfullyText:
      "Choose budget-friendly details like fairy lights, pillows with geometric designs, or sleek vases to elevate your space.",
    playWithAnglesForPhotos: "Play With Angles for Photos",
    playWithAnglesForPhotosText:
      "Once your space is done, experiment with camera angles, lighting, and photo filters to capture its charm.",
    socialMediaShapingDesignTrends:
      "The Role of Social Media in Shaping Design Trends",
    socialMediaShapingDesignTrendsText:
      "Social media isn't just about showcasing—it's shaping what's trendy. Here's how Instagram plays a vital role:",
    crowdsourcingCreativity: "Crowdsourcing Creativity",
    crowdsourcingCreativityText:
      "Through hashtags like #RoomGoals or #AestheticInteriors, people can easily draw inspiration. Trends spread fast because of this visibility.",
    massAppealToNicheInterests: "Mass Appeal to Niche Interests",
    massAppealToNicheInterestsText:
      "Platforms give rise to niche aesthetics such as \"cottage core\" or \"dark academia,\" helping like-minded groups build communities.",
    interactiveShopping: "Interactive Shopping",
    interactiveShoppingText:
      "Social media integrations now allow users to shop directly from inspirational posts. Just tap, and add to cart.",
    empoweringNewCreators: "Empowering New Creators",
    empoweringNewCreatorsText:
      "Interior enthusiasts and influencers are not just reshaping design but careers. With thousands of followers, they're dictating the future of interiors.",
    shareYourBestSpace: "Share Your Best Space",
    shareYourBestSpaceText:
      "Creating Instagram-worthy interiors involves creativity, tech-savvy tools, and an eye for detail. But most importantly, it's about YOU.",
    shareYourBestSpaceInstagram:
      "What's your favorite tip? Share your Insta-worthy spaces with us @Stylyio, and don't forget to try our AI room planner to design your next masterpiece.",
    prevArticle:
      "How Real Estate Agents Are Boosting Sales with AI-Powered Virtual Staging: The 2025 Market Reality",
    nextArticle:
      "How to Build Your Own House with AI Tools Including Porch Design",
    readMore: "Read More",
    expertTipsIntroductionText1:
      "Transforming your home interiors doesn't have to break the bank. With the advent of advanced tools like",
    stylyAI: "Styly's free AI room design",
    expertTipsIntroductionText2:
      "solutions, you can achieve stunning results on a budget. Here are 10 expert tips to help you save big on your home interiors while using the latest AI-powered tools.",

    // Tips
    planBeforeYouSpend: "Plan Before You Spend",
    planBeforeYouSpendContent:
      "Proper planning is essential to avoid unnecessary expenses. Use free AI interior design tools like Styly to visualize your ideas before committing to them.",
    optimizeRoomLayoutWithAI: "Optimize Room Layout with AI",
    optimizeRoomLayoutWithAIContent:
      "Leverage an AI room decorator to experiment with layouts. Tools like Styly can provide multiple design options to utilize space efficiently.",
    upcycleFurniture: "Upcycle Furniture",
    upcycleFurnitureContent:
      "Give your furniture a fresh look by upcycling. Pair this with Styly's AI room design features to visualize revamped pieces in your interiors.",
    focusOnDIYProjects: "Focus on DIY Projects",
    focusOnDIYProjectsContent:
      "Add a personal touch with DIY decor. Use free AI room design tools to guide your projects and align them with your design theme.",
    shopSmartForMaterials: "Shop Smart for Materials",
    shopSmartForMaterialsContent:
      "Look for discounts or second-hand options. AI tools help visualize how materials will work, preventing wasted purchases.",
    prioritizeKeyElements: "Prioritize Key Elements",
    prioritizeKeyElementsContent:
      "Focus your budget on impactful items like lighting. AI design tools help identify high-value, budget-friendly options.",
    experimentWithColorsVirtually: "Experiment with Colors Virtually",
    experimentWithColorsVirtuallyContent:
      "Before buying, test color palettes using Styly's free AI tools. Save money by getting it right on the first try.",
    investInMultiFunctionalFurniture: "Invest in Multi-Functional Furniture",
    investInMultiFunctionalFurnitureContent:
      "Opt for items like sofa beds or ottomans with storage. Visualize them with AI tools to ensure the best fit.",
    useAIForAccessoryPlacement: "Use AI for Accessory Placement",
    useAIForAccessoryPlacementContent:
      "Styly's AI can recommend where to place accessories for a polished look without overbuying.",
    stayUpdatedWithTrends: "Stay Updated with Trends",
    stayUpdatedWithTrendsContent:
      "AI platforms offer trend insights. Use them to incorporate stylish updates without a complete redo.",

    // Why Choose Styly
    whyChooseStyly: "Why Choose Styly for Your Home Interiors?",
    stylyDescription:
      "Styly's free AI interior design tools make it easy to create personalized, budget-friendly interiors. Whether redecorating a room or your whole home, Styly empowers you to:",
    visualizeDesigns: "Visualize designs instantly",
    experimentWithLayouts: "Experiment with layouts and styles",
    saveMoney: "Save money by avoiding costly mistakes",
    getStartedWithStyly: "Get started with Styly today and take the stress out of home interiors in 2025. ",
    freeAIRoomDesign: "free AI room design",
    transformYourSpace: "tools and transform your space like a pro!",

    // Revolutionizing Architecture blog post
    revolutionizingArchitectureTitle: "Revolutionizing Architecture, Engineering, and Construction with AI",
    revolutionizingArchitectureIntro: "Discover how artificial intelligence is transforming the AEC industry with innovative design solutions and enhanced efficiency.",
    revolutionizingArchitectureTableOfContents: "Table of Contents",
    revolutionizingArchitectureIntroduction: "Introduction",
    revolutionizingArchitectureIntroductionText: "The Architecture, Engineering, and Construction (AEC) industry stands at the precipice of a technological revolution. Artificial Intelligence (AI) is no longer a futuristic concept but a present reality that's reshaping how we design, plan, and construct our built environment. From automated design generation to predictive maintenance, AI is transforming every aspect of the construction lifecycle.",
    revolutionizingArchitectureAITransformation: "The AI Transformation in AEC",
    revolutionizingArchitectureAITransformationText: "The integration of AI in the AEC industry represents a paradigm shift from traditional methods to intelligent, data-driven approaches. Machine learning algorithms can now analyze vast datasets to optimize building performance, predict structural issues, and generate innovative design solutions that were previously impossible to conceive.",
    revolutionizingArchitectureKeyBenefits: "Key Benefits of AI in Architecture and Construction",
    revolutionizingArchitectureKeyBenefitsText: "The implementation of AI technologies in the AEC sector brings numerous advantages that are revolutionizing the industry:",
    revolutionizingArchitectureBenefit1: "Enhanced Design Efficiency",
    revolutionizingArchitectureBenefit1Text: "AI-powered design tools can generate multiple design iterations in minutes, allowing architects to explore more creative possibilities while reducing time-to-market significantly.",
    revolutionizingArchitectureBenefit2: "Improved Cost Estimation",
    revolutionizingArchitectureBenefit2Text: "Machine learning algorithms analyze historical project data to provide more accurate cost predictions, helping prevent budget overruns and improve project profitability.",
    revolutionizingArchitectureBenefit3: "Predictive Maintenance",
    revolutionizingArchitectureBenefit3Text: "AI systems can monitor building performance in real-time and predict maintenance needs before issues become critical, extending building lifespan and reducing operational costs.",
    revolutionizingArchitectureBenefit4: "Sustainable Design Optimization",
    revolutionizingArchitectureBenefit4Text: "AI algorithms can optimize building designs for energy efficiency, material usage, and environmental impact, supporting the industry's move toward sustainable construction practices.",
    revolutionizingArchitectureRealWorldApplications: "Real-World Applications",
    revolutionizingArchitectureRealWorldApplicationsText: "AI is already making significant impacts across various aspects of the AEC industry:",
    revolutionizingArchitectureApplication1: "Generative Design",
    revolutionizingArchitectureApplication1Text: "Tools like Autodesk's Dreamcatcher and Styly.io's AI interior design platform use algorithms to generate thousands of design options based on specified parameters, enabling architects to discover innovative solutions.",
    revolutionizingArchitectureApplication2: "Construction Site Safety",
    revolutionizingArchitectureApplication2Text: "AI-powered computer vision systems monitor construction sites in real-time, identifying safety hazards and ensuring compliance with safety protocols, significantly reducing workplace accidents.",
    revolutionizingArchitectureApplication3: "Building Information Modeling (BIM) Enhancement",
    revolutionizingArchitectureApplication3Text: "AI enhances BIM systems by automatically detecting clashes, optimizing schedules, and improving collaboration between different stakeholders in the construction process.",
    revolutionizingArchitectureFuture: "The Future of AI in AEC",
    revolutionizingArchitectureFutureText: "As AI technology continues to evolve, we can expect even more transformative applications in the AEC industry. From fully automated construction robots to AI-designed smart cities, the future promises unprecedented innovation in how we create and manage our built environment.",
    revolutionizingArchitectureConclusion: "Conclusion",
    revolutionizingArchitectureConclusionText: "The integration of AI in architecture, engineering, and construction is not just an opportunity—it's an imperative for staying competitive in the modern market. Organizations that embrace these technologies today will be the leaders of tomorrow's built environment. The revolution has begun, and the time to act is now.",
    revolutionizingArchitectureCTATitle: "Experience AI-Powered Design Today",
    revolutionizingArchitectureCTAText: "Ready to revolutionize your design process? Try Styly.io's AI-powered interior design platform and experience the future of architectural visualization.",
    revolutionizingArchitectureCTAButton: "Get Started with Styly.io",

    // Interior Design Trends 2025 Blog Post
    interiorTrends2025Title: "2025 Interior Design Trends: What's In and What's Out",
    interiorTrends2025TableOfContents: "Table of Contents",
    interiorTrends2025Introduction: "Introduction",
    interiorTrends2025IntroductionText: "As we step into 2025, the world of interior design continues to evolve, blending creativity with technology like never before. For homeowners, interior designers, and design enthusiasts, the latest trends not only shape the aesthetics of spaces but also emphasize functionality, sustainability, and personalization. In this blog, we explore what's hot and what's not in 2025 interior design trends—and how you can use free AI room design tools like Styly to stay ahead of the curve.",
    interiorTrends2025WhatsIn: "What's In: 2025 Interior Design Trends",
    interiorTrends2025WhatsOut: "What's Out: Trends to Leave Behind",
    interiorTrends2025StylyRole: "How Styly Revolutionizes Interior Design",
    interiorTrends2025Conclusion: "Conclusion",
    interiorTrends2025EcoConscious: "1. Eco-Conscious Design",
    interiorTrends2025EcoConsciousText: "Sustainability takes center stage as homeowners prioritize eco-friendly materials like reclaimed wood, bamboo, and recycled metal. Incorporating greenery through indoor plants and vertical gardens is also a top trend.",
    interiorTrends2025EcoConsciousStyly: "How Styly Helps: With our free AI interior design platform, you can experiment with eco-friendly layouts and visualize sustainable materials in your space before committing to a purchase.",
    interiorTrends2025Biophilic: "2. Biophilic Elements",
    interiorTrends2025BiophilicText: "The connection between nature and design deepens, with biophilic patterns, textures, and colors becoming key elements. Think earthy tones, natural fibers, and organic shapes.",
    interiorTrends2025BiophilicStyly: "Styly Tip: Use our AI room decorator to explore nature-inspired designs tailored to your preferences.",
    interiorTrends2025SmartHome: "3. Smart Home Integration",
    interiorTrends2025SmartHomeText: "Interior design in 2025 seamlessly integrates technology. From smart lighting systems to AI-powered appliances, homes are becoming more intuitive and efficient.",
    interiorTrends2025SmartHomeStyly: "How You Benefit: Styly's AI interior design free features make it easy to create smart layouts and plan the integration of tech into your design.",
    interiorTrends2025BoldColors: "4. Bold Colors and Maximalism",
    interiorTrends2025BoldColorsText: "Gone are the days of strictly minimalistic spaces. Vibrant hues, eclectic patterns, and maximalist décor are in vogue, reflecting individuality and a sense of playfulness.",
    interiorTrends2025BoldColorsStyly: "Styly's Role: Experiment with bold color palettes using our free AI room design tools and see what works best for your space.",
    interiorTrends2025Multifunctional: "5. Multifunctional Spaces",
    interiorTrends2025MultifunctionalText: "With work-from-home trends persisting, multifunctional rooms that serve as offices, gyms, or entertainment hubs are a must.",
    interiorTrends2025MultifunctionalStyly: "Styly Advantage: Plan and design multipurpose spaces effortlessly with Styly's AI room design free software.",
    interiorTrends2025OverlyMinimalistic: "1. Overly Minimalistic Interiors",
    interiorTrends2025OverlyMinimalisticText: "While minimalism isn't entirely gone, the stark, cold look of ultra-minimalist spaces is fading. Homeowners are now embracing warmth, comfort, and personalization.",
    interiorTrends2025AllWhiteKitchens: "2. All-White Kitchens",
    interiorTrends2025AllWhiteKitchensText: "All-white kitchens are being replaced by warm, earthy tones or vibrant splashes of color that make the heart of the home feel more inviting.",
    interiorTrends2025OpenShelving: "3. Open Shelving Overload",
    interiorTrends2025OpenShelvingText: "While open shelving remains functional, its excessive use is being replaced by a mix of closed cabinets and curated open displays.",
    interiorTrends2025FastFurniture: "4. Fast Furniture",
    interiorTrends2025FastFurnitureText: "Disposable furniture that doesn't last is falling out of favor. Instead, durable, high-quality pieces with timeless appeal are trending.",
    interiorTrends2025StylyRoleText: "With Styly's cutting-edge technology, you can harness the power of AI to create stunning, personalized interiors effortlessly. Whether you're a homeowner seeking inspiration or an interior designer planning spaces, our platform offers:",
    interiorTrends2025StylyFeature1: "Free AI Interior Design Tools: Get started at no cost with intuitive design features.",
    interiorTrends2025StylyFeature2: "AI Room Decorator: Generate and visualize design ideas tailored to your style and needs.",
    interiorTrends2025StylyFeature3: "Free AI Room Design Solutions: Plan, customize, and perfect every detail of your space.",
    interiorTrends2025ConclusionText: "Interior design trends for 2025 are all about merging style with substance, sustainability, and technology. Whether you're revamping your living room or designing a completely new space, staying on-trend is easier than ever with Styly's AI interior design free tools.",
    interiorTrends2025CTATitle: "Start Your Design Journey Today",
    interiorTrends2025CTAText: "Transform your spaces effortlessly with Styly's free AI interior design tools. Experience the future of interior design and create your dream home with just a few clicks.",
    interiorTrends2025CTAButton: "Get Started with Styly.io",

    // Enhanced content with links and references
    interiorTrends2025BiophilicLink: "Discover our complete guide on creating biophilic interior designs",
    interiorTrends2025BiophilicExternal: "According to ArchDaily, biophilic design can improve well-being by up to 15%",
    interiorTrends2025SmartHomeCTA: "Try our AI room planner to design smart, connected spaces",
    interiorTrends2025BoldColorsExternal: "Elle Décoration reports that maximalist interiors are the top trend for 2025",
    interiorTrends2025MultifunctionalLink: "See our expert tips on creating multifunctional home offices",
    interiorTrends2025KitchenExternal: "Houzz data shows 73% of homeowners are moving away from all-white kitchens",
    interiorTrends2025MinimalismLink: "Read our article on balancing minimalism with warmth in modern homes",
    interiorTrends2025StylyRoleCTA: "Experience these trends firsthand with our free AI interior design platform",

    // Enhanced content for Revolutionizing Architecture blog
    revolutionizingArchitectureAIDesignLink: "Explore our comprehensive guide to AI-powered interior design tools",
    revolutionizingArchitectureArchDailyExternal: "ArchDaily reports that AI is transforming 85% of architectural workflows",
    revolutionizingArchitectureBIM_CTA: "Try our AI design platform to create intelligent building models",
    revolutionizingArchitectureGenerativeExternal: "According to Autodesk research, generative design reduces project time by 40%",
    revolutionizingArchitectureInteriorLink: "See how AI is revolutionizing interior design in our latest trends guide",
    revolutionizingArchitectureSmartBuildingExternal: "AD Magazine highlights smart buildings as the future of sustainable architecture",
    revolutionizingArchitectureFutureLink: "Read our expert tips on preparing for the AI-driven construction future",
    revolutionizingArchitectureFutureCTA: "Start building the future today with our AI-powered design tools",

    // Free AI Interior Design Blog Post
    freeAIDesignTitle: "Free AI Interior Design Software - Transform Your Space",
    freeAIDesignTableOfContents: "Table of Contents",
    freeAIDesignIntroduction: "Introduction",
    freeAIDesignIntroductionText: "In today's fast-paced world, designing beautiful and functional spaces has become easier than ever, thanks to technological advancements. Styly is at the forefront of this revolution, offering free AI interior design software that empowers you to bring your creative visions to life. Whether you're a homeowner looking to redecorate or a professional designer seeking innovative tools, Styly provides the perfect solution for all your interior design needs.",
    freeAIDesignWhyChooseStyly: "Why Choose Styly for AI Room Design?",
    freeAIDesignWhyChooseStylyText: "Styly leverages advanced AI room design free tools to deliver exceptional results in minutes. With our intuitive platform, you can:",
    freeAIDesignFeature1: "Generate stunning room layouts tailored to your preferences",
    freeAIDesignFeature2: "Experiment with different furniture arrangements and color schemes",
    freeAIDesignFeature3: "Visualize your ideas in 3D without any design experience required",
    freeAIDesignFeature4: "Save time and money by avoiding costly design mistakes",
    freeAIDesignHouzzExternal: "Houzz reports that AI design tools increase project efficiency by 60%",
    freeAIDesignKeyFeatures: "Key Features of Styly's Free AI Interior Design Software",
    freeAIDesignAIPowered: "AI-Powered Suggestions",
    freeAIDesignAIPoweredText: "Our smart algorithm analyzes your room dimensions, style preferences, and functional requirements to generate personalized design suggestions.",
    freeAIDesignExtensiveLibrary: "Extensive Design Library",
    freeAIDesignExtensiveLibraryText: "Explore a wide range of furniture, décor items, and finishes to create a design that reflects your personality and lifestyle.",
    freeAIDesignElleExternal: "Elle Décoration highlights AI as the future of personalized interior design",
    freeAIDesignUserFriendly: "User-Friendly Interface",
    freeAIDesignUserFriendlyText: "No technical skills? No problem! Styly's simple drag-and-drop functionality makes designing fun and accessible for everyone.",
    freeAIDesignTryNowCTA: "Try our intuitive AI design interface now - no experience required",
    freeAIDesignFreeCredits: "Free Credits to Get Started",
    freeAIDesignFreeCreditsText: "Sign up today and receive free credits to start designing your dream spaces.",
    freeAIDesignBenefits: "Benefits of Using Styly for Free AI Room Design",
    freeAIDesignCostEffective: "Cost-Effective",
    freeAIDesignCostEffectiveText: "Eliminate the need for expensive design consultations",
    freeAIDesignTimeSaving: "Time-Saving",
    freeAIDesignTimeSavingText: "Quickly visualize multiple design ideas without lengthy back-and-forths",
    freeAIDesignCustomizable: "Customizable",
    freeAIDesignCustomizableText: "Tweak every element to match your exact vision",
    freeAIDesignTrendsLink: "Discover the latest 2025 interior design trends to inspire your AI-generated designs",
    freeAIDesignHowToStart: "How to Get Started with Styly",
    freeAIDesignStep1: "Visit www.styly.io",
    freeAIDesignStep2: "Create your account and claim your free AI room design credits",
    freeAIDesignStep3: "Upload your room dimensions or choose from pre-set templates",
    freeAIDesignStep4: "Experiment with layouts, colors, and furniture to create your dream space!",
    freeAIDesignMarieExternal: "Marie Claire Maison showcases AI as revolutionizing home decoration accessibility",
    freeAIDesignRoomDecorator: "Transform Your Spaces with a Free AI Room Decorator",
    freeAIDesignRoomDecoratorText: "Styly goes beyond basic design tools, acting as your AI room decorator. With advanced customization options and the ability to visualize designs in real time, you can turn any space into a masterpiece.",
    freeAIDesignExpertTipsLink: "Learn expert tips for budget-friendly interior design with AI tools",
    freeAIDesignWhyStandsOut: "Why Styly Stands Out",
    freeAIDesignWhyStandsOutText: "Unlike other platforms, Styly combines powerful AI technology with an easy-to-use interface, making free AI interior design accessible to everyone. Plus, our focus on both interior and exterior design ensures that your entire home is a reflection of your style.",
    freeAIDesignCoteMaisonExternal: "Côté Maison emphasizes the importance of accessible design tools for modern homeowners",
    freeAIDesignExperienceCTA: "Experience the future of interior design with our comprehensive AI platform",
    freeAIDesignConclusion: "Conclusion",
    freeAIDesignConclusionText: "Styly is changing the game for free AI interior design by providing an innovative and user-friendly platform. Whether you're redesigning a single room or reimagining your entire home, Styly offers the tools to make it happen.",
    freeAIDesignArchitectureLink: "Explore how AI is revolutionizing architecture and construction industries",
    freeAIDesignCTATitle: "Start Your Free AI Design Journey Today",
    freeAIDesignCTAText: "Transform your spaces effortlessly with Styly's free AI interior design software. Create stunning room layouts, experiment with furniture arrangements, and bring your creative visions to life.",
    freeAIDesignCTAButton: "Get Started with Free Credits",

    // Real Estate Virtual Staging Blog Post - Hardcoded text translations
    transformRealEstateListings: "Transform your real estate listings with our AI virtual staging tools",
    startBoostingRealEstateSales: "Start boosting your real estate sales with AI-powered virtual staging today",

    // Viral AI Room Design Prompts Blog Post
    viralAIRoomDesignPromptsTitle: "6 Viral AI Room Design Prompts: Create Your Dream Bedroom with STYLY.io",
    viralAIRoomDesignPromptsDescription: "Discover 6 viral AI room design prompts that consistently generate jaw-dropping bedroom results. Transform your space with STYLY.io's AI room designer.",

    // New Phase 1 Blog Posts
    impactAIInteriorDesignerTitle: "The Impact of AI on the Role of the Interior Designer: A Collaborative Future",
    aiVirtualRealityDesignTitle: "The Intersection of AI and Virtual Reality in Design: What the Future Holds",
    aiAccessibleDesignTitle: "AI in Accessible Design: Creating Inclusive Spaces with Styly",

    // New Phase 2 Blog Posts
    dataAIPoweredDesignTitle: "The Role of Data in AI-Powered Design: How Insights Drive Better Aesthetics",
    modernFamilyDesignTitle: "Designing for the Modern Family: Using AI to Create Functional and Stylish Homes",
    sustainableDesignAITitle: "Designing for Sustainability: Using AI to Create Eco-Friendly Spaces",
    aiSpacePlanningSmallApartmentsTitle: "Leveraging AI to Optimize Space Planning in Small Apartments",
    biophilicDesignAITitle: "Creating Biophilic Interior Designs with Styly AI",

    // New Phase 3 Blog Posts
    scienceColorDesignTitle: "The Science of Color in Design: How AI Helps You Choose the Perfect Palette",
    sustainableLandscapesAITitle: "Reducing Carbon Footprints: Sustainable Landscapes with Styly AI",
    aiLandscapeDesignTitle: "AI in Landscape Design: Creating Beautiful Outdoor Spaces with Styly",
    culturalDesignAITitle: "Interior Designing for Different Cultures: Leveraging AI for Culturally Sensitive Spaces",
    textureImportanceDesignTitle: "The Importance of Texture in Interior Design: How Styly Can Help",

    // Video Guide Page
    videoGuide: "Video Guide",
    videoTutorials: "Video Tutorials",
    learnAIInteriorDesign: "Learn AI Interior Design",
    discoverHowToUseAITools: "Learn how to use our AI tools to transform your interior spaces",
    readyToTransformSpaces: "Ready to transform your spaces?",
    getStartedWithFreeAITools: "Get started now with our free AI tools",

    // Services API Page
    servicesAPI: "API",
    stylyAIAPISuite: "Styly AI API Suite",
    mostAdvancedVisualIntelligencePlatform: "The Most Advanced Visual Intelligence Platform for Design, Retail & Real Estate",
    developerAPIs: "Developer APIs",
    requestAccess: "Request Access",
    exploreAPIDocs: "Explore API Docs",
    whyChooseOurAPIs: "Why Choose Our APIs",
    lightningFast: "Lightning-Fast",
    scalable: "Scalable",
    productionReady: "Production-Ready",
    global: "Global",
    millionsOfRequests: "Millions of requests",
    uptimeNineNineNine: "99.9% uptime",
    worldwideCDN: "Worldwide CDN",
    ourCoreAPIs: "Our Core APIs",
    fivePowerfulAPIs: "5 powerful APIs to transform your platform with artificial intelligence",
    aiFloorGenerationAPI: "AI Floor Generation API",
    generateRealisticFloorDesigns: "Generate realistic and customized floor designs in seconds",
    aiWallGenerationAPI: "AI Wall Generation API",
    createSophisticatedWallDesigns: "Create sophisticated wall designs with textures and colors",
    aiMoodboardGeneratorAPI: "AI Moodboard Generator API",
    createCohesiveMoodboards: "Create cohesive and inspiring moodboards automatically",
    aiRealEstateEnhancementAPI: "AI Real Estate Enhancement API",
    transformRealEstatePhotos: "Transform real estate photos with virtual home staging",
    aiProductVisualizationAPI: "AI Product Visualization API",
    integrateProductsIntoEnvironments: "Integrate products into realistic environments",
    realisticMaterials: "Realistic materials",
    customizableStyles: "Customizable styles",
    highResolution: "High resolution",
    easyIntegration: "Easy integration",
    variedTextures: "Varied textures",
    customColors: "Custom colors",
    realisticLighting: "Realistic lighting",
    instantRendering: "Instant rendering",
    harmoniousPalettes: "Harmonious palettes",
    cohesiveStyles: "Cohesive styles",
    multipleExports: "Multiple exports",
    advancedCustomization: "Advanced customization",
    virtualHomeStaging: "Virtual home staging",
    photoEnhancement: "Photo enhancement",
    multipleStyles: "Multiple styles",
    immediateROI: "Immediate ROI",
    realisticPlacement: "Realistic placement",
    adaptiveLighting: "Adaptive lighting",
    automaticContext: "Automatic context",
    ecommerceReady: "E-commerce ready",
    simpleIntegration: "Simple Integration",
    startUsingAPIsWithCode: "Start using our APIs with just a few lines of code",
    apiExample: "API Example",
    generateAIFloorDesign: "Generate AI floor design",
    generatedDesignURL: "Generated design URL",
    whoItsBuiltFor: "Who It's Built For",
    designPlatforms: "Design Platforms",
    integrateAIIntoDesignTools: "Integrate AI into your existing design tools",
    realEstate: "Real Estate",
    enhanceListingsWithVirtualStaging: "Enhance your listings with virtual home staging",
    ecommerce: "E-commerce",
    visualizeProductsInRealEnvironments: "Visualize your products in real environments",
    mobileApps: "Mobile Apps",
    addAICapabilitiesToApps: "Add AI capabilities to your mobile apps",
    whyTeamsChooseStylyAPIs: "Why Teams Choose Styly APIs",
    cuttingEdgeAI: "Cutting-Edge AI",
    aiModelsTrainedOnMillions: "AI models trained on millions of design images",
    fastDeployment: "Fast Deployment",
    integrationUnder30Minutes: "Integration in under 30 minutes with our SDK",
    expertSupport: "Expert Support",
    dedicatedTeamForIntegration: "Dedicated team for your integration and optimization",
    whatYouCanBuildWithIt: "What You Can Build With It",
    interiorDesignPlatform: "Interior Design Platform",
    createCompletePlatformWithGeneration: "Create a complete platform with automatic design generation, moodboards and 3D visualizations.",
    automaticDesignGeneration: "Automatic design generation",
    customMoodboards: "Custom moodboards",
    realTime3DVisualization: "Real-time 3D visualization",
    ecommerceApplication: "E-commerce Application",
    integrateProductsToIncreaseConversions: "Integrate your products into realistic environments to increase conversions.",
    contextualProductVisualization: "Contextual product visualization",
    automaticRecommendations: "Automatic recommendations",
    increasedConversions: "Increased conversions",
    readyToGetStarted: "Ready to Get Started?",
    joinHundredsOfDevelopers: "Join hundreds of developers already using our APIs to build the future of design.",
    requestAPIAccess: "Request API Access",
    bookTechnicalDemo: "Book a Technical Demo",
    fullName: "Full Name",
    workEmail: "Work Email",
    company: "Company",
    useCase: "Use Case",
    selectYourUseCase: "Select your use case",
    designPlatform: "Design Platform",
    mobileApp: "Mobile App",
    other: "Other",
    sendRequest: "Send Request",
    yourName: "Your name",
    yourCompanyName: "Your company name",
    startFreeTrial: "Start Free Trial",
    contactUs: "Contact Us",
    seeItForYourself: "See it for yourself",
    culminationQuantitativeResearch: "The culmination of quantitative research",

    // Collaborators Page
    collaborators: "Collaborators",
    becomeCollaborator: "Bring Vision to Life.",
    joinOurNetwork: "Help 20,000+ Creators Turn Ideas Into Spaces.",
    collaboratorHeroDescription: "Every week, thousands of new AI concepts are created on Styly. Join the creative minds turning them into reality.",
    becomeDesignPartner: "Become a Design Partner",
    freeAndQuick: "It's free, and takes just 2 minutes.",

    // Problem Section
    theProblem: "The Problem",
    problemDescription: "Most design professionals waste hours chasing cold leads.",
    deadEndDMs: "Dead-end DMs and ghosting",
    deadEndDMsDescription: "Potential clients who never follow through, wasting your valuable time and energy.",
    budgetlessCollectors: "Budgetless \"idea collectors\"",
    budgetlessCollectorsDescription: "People who are just browsing with no real intent to hire a professional.",
    endlessPitching: "Endless pitching for tiny results",
    endlessPitchingDescription: "Creating detailed proposals that go nowhere, draining your resources.",
    stylyUsersReady: "Styly users already know what they want",
    stylyUsersDescription: "They've designed their space. They're ready to start. And they need someone they can trust.",

    // Opportunity Section
    collaboratorsStylyAdvantage: "The Styly Advantage",
    stylyAdvantageDescription: "Be featured as a Verified Styly Partner and access pre-qualified clients.",
    getDiscoveredBy: "Get discovered by clients who:",
    haveAIDesigns: "Have AI-generated design previews",
    haveAIDesignsDescription: "Skip the guesswork. Clients already know their style.",
    knowStyleSpace: "Know their style and space",
    knowStyleSpaceDescription: "They've already made key decisions, saving you time.",
    activelyLooking: "Are actively looking for a professional",
    activelyLookingDescription: "No more tire kickers. Only serious clients.",
    curatedMatchmaking: "curated client matchmaking",
    notJustLeadGeneration: "This is not just lead generation. It's",

    // Benefits Section
    whatYoullGet: "What You'll Get",
    highIntentClients: "High-intent clients",
    highIntentClientsDescription: "Pre-qualified by design activity, ready to move forward with their projects.",
    aiEducatedHomeowners: "Access to AI-educated homeowners",
    aiEducatedHomeownersDescription: "Connect with clients who understand design concepts through Styly's AI.",
    globalVisibility: "Global visibility",
    globalVisibilityDescription: "Get featured on Styly.io and Lovable.com to reach more potential clients.",
    officialBadge: "Official \"STYLY Certified\" Pro badge",
    officialBadgeDescription: "Differentiate yourself with official recognition that builds trust.",
    directContact: "Direct contact",
    directContactDescription: "Connect with clients via email or site chat without platform interference.",
    noCommissions: "No commissions",
    noCommissionsDescription: "No platform lock-in. You keep 100% of your deals.",

    // Comparison Chart Section
    paymentBenefits: "Benefits",
    comparisonChart: "Comparison chart",
    traditionalAgencies: "Traditional agencies",
    withoutAI: "(without AI)",
    vs: "Vs",
    styly: "Styly",
    leadCost: "Lead cost",
    monthlyLeadVolume: "Monthly lead volume",
    aiCompetency: "Ai competency",
    marketPosition: "Market position",
    serviceEvolution: "Service evolution",
    designPreferenceUnderstanding: "Design preference understanding",
    monthlyTraffic: "Monthly traffic",
    globalReach: "Global reach",
    portfolioViewsOnline: "Portfolio views online",
    clientBase: "Client base",
    futureReadiness: "Future readiness",
    joinStylyTransform: "Join Styly today and transform your business with AI-powered advantages",
    becomeCertifiedPro: "Become a Certified Pro",

    // Premium Placement Section
    premiumPlacement: "Premium Placement = Premium Clients",
    stylyHighlightPros: "Styly will highlight top Certified Pros throughout:",
    aiProjectExports: "AI project exports with professional recommendations",
    stylyNewsletters: "Styly newsletters & email campaigns to thousands of users",
    proPartnerDirectory: "The Pro Partner Directory on Lovable.com",
    goToNameWhen: "You'll also be the go-to name when:",
    couplesDisagree: "Couples disagree on renovation styles and need professional mediation",
    realtorsWantStaging: "Realtors want staging without breaking budgets",
    homeownersNeedProfessional: "Homeowners need a professional to finalize the vision they created using Styly",

    // Application CTA Section
    readyToBeRecommended: "Ready to Be Recommended by Styly?",
    inviteOnlyExperience: "This is an invite-only experience. Limited to top professionals per city.",
    applyNow: "Apply Now",
    questionsReachUs: "Questions? Reach us directly at",
    orDMUs: "or DM us",

    // Social Proof Section
    joinGrowingNetwork: "Join a Growing Network of Forward-Thinking Designers",
    architectTokyo: "Architect, Tokyo",
    interiorDesignerCapeTown: "Interior Designer, Cape Town",
    freelancerLisbon: "Freelancer, Lisbon",
    socialProofDescription: "From boutique studios to solo creators — Styly partners are everywhere ideas are evolving.",

    // Discovery Card Section
    yourOwnDiscoveryCard: "Your Own Discovery Card on Styly",
    discoveryCardDescription: "Users exploring ideas can find and connect with you through your dedicated profile.",
    calmMinimalistSpaces: "Calm minimalist spaces with edge",

    // Why Join Section
    whyJoinStyly: "Designed for Creatives Ready to Do Meaningful Work",
    clientsWithVision: "Clients With Vision",
    clientsWithVisionDescription: "Work with people who've already imagined something — and need you to bring it to life.",
    designOnYourTerms: "Design on Your Terms",
    designOnYourTermsDescription: "Choose who you work with, how you collaborate, and where you work from.",
    builtInExposure: "Built-In Exposure",
    builtInExposureDescription: "Get seen by over 20K monthly users exploring creative ideas.",
    realCreativityAI: "Real Creativity, Enhanced by AI",
    realCreativityAIDescription: "Partner with clients using AI not to replace you — but to spark new conversations.",
    forStudiosAndSolo: "For Studios & Solo Creators",
    forStudiosAndSoloDescription: "Whether you're freelance or full-service — Styly helps people find your unique voice.",
    // How It Works Section
    collaboratorsHowItWorks: "How to Join in 3 Simple Steps",
    stepOne: "Apply",
    stepOneDescription: "Share your name, email, and a bit about your work.",
    stepTwo: "Get Listed",
    stepTwoDescription: "Once approved, your profile appears on Styly's discovery page.",
    stepThree: "Start Collaborating",
    stepThreeDescription: "Get contacted by people who are inspired by what you do.",

    // Who We're Looking For Section
    whoWereLookingFor: "Creatives Who Think Spatially and Dream Boldly",
    interiorDesigners: "Interior Designers",
    architects: "Architects",
    conceptualCreatives: "Conceptual Creatives",
    spatialArtists: "Spatial Artists",
    setDesigners: "Set Designers",
    anyoneExploringSpace: "Anyone exploring space, texture, form, or experience",
    quoteBlock: "If you've ever wanted to turn someone's wild concept into a real-world masterpiece — this is for you.",

    // Final CTA Section
    readyToJoin: "Ready to Join?",
    readyToJoinDescription: "Start collaborating with visionary creators today.",
    collaboratorsApplyNow: "Apply Now",
    learnMore: "Learn More",
    getStarted: "Get Started",

    // Application Form
    applicationForm: "Application Form",
    quickApplication: "Quick & Easy Application",
    applyToJoinNetwork: "Apply to Join Our Network",
    fillOutForm: "Fill out the form below to start your application process",
    quickFormDescription: "Join our exclusive network in just 2 minutes. Only 4 fields required.",
    collaboratorFullName: "Full Name",
    collaboratorFullNamePlaceholder: "Enter your full name",
    emailAddress: "Email Address",
    emailPlaceholder: "Enter your email address",
    location: "Location",
    locationPlaceholder: "City, Country",
    portfolioLink: "Portfolio Link",
    portfolioPlaceholder: "https://your-portfolio.com",
    specialization: "Specialization",
    selectSpecialization: "Select your specialization",
    interiorDesign: "Interior Design",
    architecture: "Architecture",
    collaboratorOther: "Other",
    submitApplication: "Submit Application",
    submitting: "Submitting...",
    collaboratorsClose: "Close",
    cancel: "Cancel",

    // Form Validation
    fieldRequired: "This field is required",
    invalidEmail: "Please enter a valid email address",
    invalidUrl: "Please enter a valid URL",

    // Form Success/Error States
    applicationSubmitted: "Application Submitted Successfully!",
    applicationSuccess: "Thank you for your application. We'll review it and get back to you within 2-3 business days.",
    applicationError: "Something went wrong. Please try again later.",
    tryAgain: "Try Again",

  },
  fr: {
    // Add missing properties with placeholder translations
    eclecticFusion: "Fusion éclectique",
    eclecticFusionPrompt:
      "Fusion éclectique : mélange de styles, couleurs vibrantes, objets uniques...",
    minimalistZen: "Zen minimaliste",
    minimalistZenPrompt:
      "Zen minimaliste : lignes épurées, palette neutre, ambiance apaisante...",
    vintageCharm: "Charme vintage",
    vintageCharmPrompt:
      "Charme vintage : meubles anciens, détails classiques, ambiance chaleureuse...",
    keywords:
      "Mots-clés : design de chambre IA, design minimaliste, design vintage, design éclectique",
    followUsHere: "Suivez-nous ici !",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    facebook: "Facebook",
    // Navbar
    pricing: "Tarifs",
    blog: "Blogue",
    signIn: "Connexion",
    expertDesignTipsText:
      "Conseils de design d'experts pour améliorer vos intérieurs.",
    japaneseMinimalism: "Minimalisme japonais",
    japaneseMinimalismPrompt:
      "Minimalisme japonais : lignes épurées, matériaux naturels, ambiance sereine...",
    prompt: "Entrez vos préférences de design ici...",

    // Hero section
    welcomeToFuture: "Bienvenue dans le Futur du Design Intérieur",
    mostUsedAITool: "#1 le plus utilisé",
    aiDesignTool: "Outil de design intérieur IA gratuit",
    for: "pour",
    modernSpaces: "espaces modernes",
    redesignEmptyRooms:
      "Transformez des espaces vides en intérieurs stylés —",
    forRealEstate: "pour l'immobilier, la rénovation et le home staging virtuel.",
    noToolsNoDownloads:
      "Pas d'outils, pas de téléchargements. Juste des résultats.",
    uploadPhoto: "Télécharger une Photo pour Commencer",
    supporting: "Au service de",
    realEstatePros:
      "plus de 20 000 professionnels de l'immobilier, designers d'intérieur et propriétaires utilisant notre outil design intérieur",

    // Unlock potential section
    designExcellence: "Excellence en Design Intérieur IA",
    unlockThePotential: "LIBÉREZ LE POTENTIEL DU DESIGN INTÉRIEUR IA GRATUIT",
    aiDrawsInspiration: "Notre logiciel design intérieur gratuit s'inspire d'architectes légendaires tels que",
    legendaryArchitects:
      "Le Corbusier, Zaha Hadid, Frank Gehry, Frank Lloyd Wright, et Gaudi",
    experienceAdvancedAI:
      "Découvrez comment notre planificateur chambre IA et générateur design intérieur IA transforment vos concepts en réalité époustouflante.",
    explore: "Explorer le Design Chambre IA",

    // Architecture Revolution
    architectureRevolution: "RÉVOLUTION DU DESIGN INTÉRIEUR IA",
    homeDesignByAI: "Design de maison, planificateur chambre IA et décoration intérieure par IA gratuite.",

    // ModernSpaces
    redesignRooms:
      "Rénovez des pièces vides en intérieurs stylés et prêts pour le marché —",
    forRealEstateRenovation:
      "pour l'immobilier, la rénovation et le commerce de détail.",
    noToolsJustResults:
      "Pas d'outils, pas de téléchargements. Juste des résultats.",

    // HowItWorks
    simpleProcess: "Processus Simple avec IA Design Intérieur",
    howItWorks: "Comment Fonctionne Notre Logiciel Design Intérieur Gratuit",
    transformSpace:
      "Transformez votre espace en trois étapes simples avec notre planificateur chambre IA et générateur design intérieur IA",
    upload: "Télécharger",
    uploadDescription:
      "Téléchargez simplement votre image ou esquisse de l'espace que vous souhaitez transformer avec notre outil design intérieur.",
    personalize: "Personnaliser",
    personalizeDescription:
      "Choisissez vos préférences, de la sélection de mobilier au style, pour créer votre espace idéal avec notre design chambre IA.",
    furnitureSelection: "mobilier",
    enjoy: "Profiter",
    enjoyDescription:
      "Détendez-vous et profitez du résultat final avec notre ia design intérieur gratuit et home staging virtuel.",
    aiForInteriorDesign: "IA pour le design d'intérieur",
    getStartedFree: "Commencer Gratuitement avec Design Intérieur IA",
    noCreditCard: "Pas de Carte de Crédit Requise, Pas d'Engagements",

    // Testimonials
    dontTakeOurWord: "Ne vous fiez pas qu'à nos paroles",
    hearFromCustomers:
      "Écoutez certains de nos clients étonnants qui ont utilisé notre produit",

    // FAQ
    howItWorksFAQ: "Comment ça marche",
    faqs: "FAQs",
    faqDescription:
      "Tout ce que vous devez savoir sur le produit et la facturation.",
    faqQuestions: [
      {
        question:
          "Qu'est-ce qui rend notre logiciel design intérieur gratuit unique dans le monde du design d'intérieur IA?",
        answer:
          "Notre planificateur chambre IA se distingue en combinant l'intelligence artificielle de pointe avec les principes d'architectes légendaires comme <a href='https://www.archdaily.com/tag/le-corbusier' target='_blank' rel='noopener noreferrer' class='text-purple-600 hover:text-purple-800 underline'>Le Corbusier</a> et <a href='https://www.dezeen.com/tag/zaha-hadid/' target='_blank' rel='noopener noreferrer' class='text-purple-600 hover:text-purple-800 underline'>Zaha Hadid</a>. Notre outil design intérieur ne nécessite aucun téléchargement ou outil spécial, rendant le design intérieur IA gratuit accessible à tous, des professionnels de l'immobilier aux propriétaires utilisant notre générateur design intérieur IA.",
      },
      {
        question:
          "Est-ce que tout le monde peut utiliser notre design chambre IA, ou est-il conçu spécifiquement pour les professionnels?",
        answer:
          "Notre logiciel design intérieur gratuit est conçu pour tout le monde! Bien qu'il soit assez puissant pour les professionnels de l'immobilier et les designers d'intérieur, il est également assez intuitif pour les propriétaires et les passionnés de décoration intérieure sans expérience préalable. Notre planificateur chambre IA avec processus simple en trois étapes le rend accessible aux utilisateurs de tous niveaux.",
      },
      {
        question:
          "Comment notre outil design intérieur aide-t-il les utilisateurs à visualiser leurs idées de design chambre IA?",
        answer:
          "Il suffit de télécharger une photo de votre espace vide, de sélectionner vos préférences et votre style de design, et notre générateur design intérieur IA le transformera en un intérieur conçu professionnellement avec home staging virtuel. Vous pouvez expérimenter différents styles, arrangements de meubles et schémas de couleurs jusqu'à ce que vous trouviez le look parfait pour votre espace avec notre ia design intérieur gratuit.",
      },
      {
        question:
          "Notre planificateur chambre IA offre-t-il une variété de styles de design intérieur parmi lesquels choisir?",
        answer:
          "Absolument! Notre logiciel design intérieur gratuit offre une large gamme de styles de décoration intérieure, du <a href='https://www.elledecor.com/design-decorate/room-ideas/g2441/modern-minimalist-decor/' target='_blank' rel='noopener noreferrer' class='text-purple-600 hover:text-purple-800 underline'>minimaliste moderne</a> au traditionnel classique, industriel, <a href='https://www.architecturaldigest.com/gallery/scandinavian-design-ideas' target='_blank' rel='noopener noreferrer' class='text-purple-600 hover:text-purple-800 underline'>scandinave</a>, mid-century moderne, et bien d'autres. Vous pouvez également personnaliser les éléments de chaque style avec notre générateur design intérieur IA pour créer un look unique qui correspond parfaitement à votre vision de design chambre IA.",
      },
      {
        question:
          "Quel type de support notre outil design intérieur fournit-il à ses utilisateurs?",
        answer:
          "Nous offrons un support complet comprenant des tutoriels vidéo, une base de connaissances détaillée et un service client réactif pour notre ia design intérieur gratuit. Notre équipe est disponible pour vous aider avec toutes les questions ou défis que vous pourriez rencontrer lors de l'utilisation de notre planificateur chambre IA et home staging virtuel. De plus, notre <a href='/blog' class='text-purple-600 hover:text-purple-800 underline'>blog</a> présente régulièrement des conseils de décoration intérieure et de l'inspiration provenant de sources reconnues comme <a href='https://www.houzz.fr/ideabooks' target='_blank' rel='noopener noreferrer' class='text-purple-600 hover:text-purple-800 underline'>Houzz</a>.",
      },
    ],

    // VideoSection
    seeItInAction: "Voir en action",
    videoDescription: "Découvrez comment notre plateforme IA transforme le design intérieur en quelques clics",
    watchDemo: "Regarder la démo",

    // SupportedBy
    supportedBy: "Soutenu par",

    // MarketSegmentCarousel
    tailoredSolutionsForEveryNeed: "Solutions de Design Intérieur IA Adaptées à Chaque Besoin",
    aiDesignToolServesDiverseMarkets:
      "Notre logiciel design intérieur gratuit et planificateur chambre IA servent divers segments de marché avec des fonctionnalités spécialisées",
    realEstateProfessionals: "PROFESSIONNELS DE L'IMMOBILIER",
    homeownersRenters: "PROPRIÉTAIRES & LOCATAIRES",
    startupsTechCreators: "STARTUPS & CRÉATEURS TECH",
    interiorDesignersArchitects: "DESIGNERS D'INTÉRIEUR & ARCHITECTES",
    retailersBrands: "DÉTAILLANTS & MARQUES",
    wallpaperBrands: "MARQUES DE PAPIER PEINT",
    wallpaperFlooringBrands: "MARQUES DE PAPIER PEINT & REVÊTEMENT DE SOL",
    flooringBrands: "MARQUES DE REVÊTEMENT DE SOL",

    // Footer links
    footerCompany: "Entreprise",
    footerAbout: "À propos",
    footerFeatures: "Fonctionnalités",
    footerPricing: "Tarifs",
    footerContact: "Contact",
    footerLegal: "Légal",
    footerTerms: "Conditions",
    footerPrivacy: "Confidentialité",
    footerCopyright: "© 2024 STYLY. Tous droits réservés.",
    footerSlogan: "rendre le design haut de gamme accessible, durable et agréable pour tous.",
    footerLogin: "Se connecter",
    footerSignup: "S'inscrire",
    footerCopyrightYear: "Copyright 2025 STYLY",
    footerVideoGuide: "Guide Vidéo",
    footerCookieSettings: "Paramètres des cookies",
    footerBlog: "Blogue",

    // Cookie Settings popup
    cookieSettingsTitle: "Paramètres des cookies",
    cookieSettingsDescription: "Nous utilisons des cookies pour améliorer votre expérience sur notre site web. Vous pouvez choisir quels types de cookies accepter.",
    essentialCookies: "Cookies essentiels",
    essentialCookiesDescription: "Ces cookies sont nécessaires au fonctionnement du site web et ne peuvent pas être désactivés. Ils ne sont généralement définis qu'en réponse à des actions que vous effectuez.",
    analyticsCookies: "Cookies d'analyse",
    analyticsCookiesDescription: "Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site web en collectant et en rapportant des informations de manière anonyme.",
    marketingCookies: "Cookies marketing",
    marketingCookiesDescription: "Ces cookies sont utilisés pour diffuser des publicités plus pertinentes pour vous et vos intérêts.",
    acceptAll: "Tout accepter",
    acceptSelected: "Accepter la sélection",
    rejectAll: "Tout refuser",
    close: "Fermer",

    // Terms of Service page
    termsOfService: "Conditions Générales d'Utilisation",
    termsLastUpdated: "Dernière mise à jour : Janvier 2025",
    legalNotice: "I. Mention Légale",
    legalNoticeContent: "L'application mobile et web Styly et le site web styly.io sont développés et publiés par ODK. L'adresse du siège social de l'entreprise est : 14 Rue Jean Jaurès, 92800, France.",
    hosting: "II. Hébergement",
    hostingContent: "Les serveurs utilisés par l'application Styly sont hébergés par Amazon Web Services (AWS). Le site web styly.io est hébergé par Hostinger. Styly.io se réserve le droit de modifier ou de supprimer tout ou partie du site et/ou de l'application Styly sans préavis. Styly.io ne peut être tenu responsable envers les utilisateurs ou tout tiers de toute modification du Service et/ou du site web. En continuant à utiliser l'application et/ou le site web, vous acceptez pleinement ces Conditions Générales d'Utilisation. La version actuellement en ligne est la seule applicable jusqu'à son remplacement.",
    definitions: "1. Définitions",
    definitionsContent: "Conditions Générales d'Utilisation (CGU) : Ce document décrivant les droits et obligations des parties. Données Personnelles : Données identifiant ou permettant d'identifier un individu, directement ou indirectement, selon le RGPD. Droits de Propriété Intellectuelle : Tous les droits liés aux droits d'auteur, marques, brevets, secrets commerciaux, noms de domaine, etc. Licence : Droit limité d'utiliser la propriété intellectuelle strictement pour accéder et utiliser le Service. Parties : Tous les utilisateurs du Produit. Produit : L'application Styly, le site web et tous les composants. Service : L'application et/ou le site web et leur contenu et fonctionnalité. Site : Le site web accessible à https://styly.io. Application : L'application mobile Styly. Utilisateur(s) : Toute personne utilisant le Service.",
    generalConditions: "2. Conditions Générales",
    article1: "Article 1 – Accès au Service",
    article1Content: "Le Service est gratuit d'accès. Les utilisateurs ne doivent pas abuser du Service ou extraire des données à des fins non liées, comme le spam ou le développement de services concurrents.",
    article2: "Article 2 – Propriété Intellectuelle",
    article2Content: "Tout le contenu du Service (texte, visuels, code, médias, etc.) est protégé par la loi sur la propriété intellectuelle. Styly.io accorde une Licence non transférable et non exclusive pour l'utilisation du Service. Aucun élément du Service ne peut être copié ou réutilisé sans le consentement écrit préalable de Styly.io.",
    article3: "Article 3 – Gestion du Service",
    article3Content: "Styly.io se réserve le droit de : Limiter, suspendre ou restreindre l'accès au Service ; Supprimer le contenu qui perturbe la fonctionnalité ou viole les lois ; Interrompre le Service pour maintenance ou mises à jour.",
    article4: "Article 4 – Responsabilité",
    article4Content: "Styly.io ne garantit pas l'exactitude, l'exhaustivité ou la fiabilité du Service. Les utilisateurs sont responsables de surveiller les mises à jour et de sécuriser leurs propres appareils et données. Styly.io n'est pas responsable de : Interruptions de service ; Réclamations de tiers résultant de l'utilisation du Service par un Utilisateur ; Problèmes techniques ou juridiques découlant d'une mauvaise utilisation du Service. Les utilisateurs doivent indemniser Styly.io si une action en justice est intentée en raison de leurs actions.",
    article5: "Article 5 – Liens Externes",
    article5Content: "Styly.io n'est pas responsable du contenu ou de la fiabilité de tout site web ou application tiers lié depuis le Service.",
    article6: "Article 6 – Données Personnelles",
    article6Content: "Styly.io collecte et traite les Données Personnelles conformément aux lois applicables. Pour plus d'informations, les Utilisateurs doivent consulter la Politique de Confidentialité et la Politique des Cookies. En continuant à utiliser le Service, les Utilisateurs consentent à l'utilisation des cookies.",
    article7: "Article 7 – Utilisations Interdites",
    article7Content: "Il est interdit aux utilisateurs d'utiliser le Service pour : Activités illégales ; Violation de la propriété intellectuelle ; Harcèlement ou discrimination ; Collecte de données personnelles ; Piratage, hameçonnage, grattage ou spam ; Tout but immoral ou obscène ; Contournement des fonctionnalités de sécurité. Styly.io se réserve le droit de résilier l'accès pour toute violation de ces règles.",
    article8: "Article 8 – Comptes Utilisateur",
    article8Content: "Pour accéder au Service, les Utilisateurs doivent s'inscrire en utilisant Apple Sign-In. Les utilisateurs sont responsables de leurs propres identifiants de connexion et de leur activité. Le Service utilise l'IA pour générer des designs d'intérieur à partir de photos, disponibles en modes 'créatif' ou 'home staging'.",
    article9: "Article 9 – Droits de Contenu et Utilisation",
    article9Content: "Styly.io détient tous les droits de propriété intellectuelle sur le contenu qu'il partage. Les utilisateurs doivent : Respecter les droits d'image et moraux de tiers ; Créditer la paternité si nécessaire ; Demander l'autorisation pour toute utilisation de contenu protégé. En cas de litiges, toutes les parties doivent coopérer pleinement avec Styly.io dans les procédures judiciaires.",
    article10: "Article 10 – Divisibilité",
    article10Content: "Si une clause de ces CGU est jugée inapplicable, les clauses restantes demeurent valides et applicables.",
    article11: "Article 11 – Droit Applicable et Juridiction",
    article11Content: "Ces CGU sont régies par le droit français. La juridiction exclusive est attribuée aux tribunaux de Bordeaux, y compris pour les procédures d'urgence ou multi-parties.",
    article12: "Article 12 – Modification des Conditions",
    article12Content: "Styly.io se réserve le droit de mettre à jour ces CGU à tout moment. Les utilisateurs sont responsables de vérifier les mises à jour. L'utilisation continue du Service implique l'acceptation de la dernière version.",
    article13: "13. Essai Gratuit, Plan Payant et Politique de Non-Remboursement",
    article13Content: "Styly.io fournit des conditions complètes pour les services d'essai et payants avec une politique stricte de non-remboursement.",
    freeTrial: "13.1 – Essai Gratuit",
    freeTrialContent: "Styly.io fournit un Essai Gratuit pour aider les Utilisateurs à évaluer le Service. La durée et les limites de l'essai sont clairement indiquées. Les utilisateurs sont responsables d'évaluer si le Service répond à leurs besoins pendant cette période d'essai. L'accès aux fonctionnalités premium se termine une fois l'essai expiré, sauf si un Plan Payant est sélectionné.",
    paidPlan: "13.2 – Plan Payant",
    paidPlanContent: "En s'abonnant à un Plan Payant : Les utilisateurs acceptent les tarifs, le cycle de facturation et la portée des services offerts ; Les frais sont facturés à l'avance et sont dus indépendamment de l'utilisation réelle ; Il est de la responsabilité de l'Utilisateur de gérer les annulations pour éviter les renouvellements automatiques.",
    noRefundPolicy: "13.3 – Politique de Non-Remboursement",
    noRefundPolicyContent: "Tous les achats et paiements effectués à Styly.io sont définitifs et non remboursables. Cela inclut, mais sans s'y limiter : Insatisfaction du Service ; Achats erronés ou en double ; Manque d'utilisation ; Oubli d'annuler un abonnement. Styly.io n'a aucune obligation de traiter les remboursements par e-mail, support client ou fournisseurs de paiement. En utilisant le Service et en s'abonnant à un Plan Payant, les Utilisateurs acceptent cette politique stricte de non-remboursement.",
    userResponsibility: "13.4 – Responsabilité de l'Utilisateur",
    userResponsibilityContent: "Les utilisateurs sont responsables de : Évaluer l'Essai Gratuit avant de s'abonner ; Comprendre les fonctionnalités et conditions de facturation ; Gérer leurs paramètres de compte et de paiement. Styly.io décline toute responsabilité pour mauvaise utilisation, négligence ou mauvaise interprétation par l'Utilisateur.",

    // Privacy Policy page
    privacyPolicy: "Politique de Confidentialité de Styly.io",
    privacyLastUpdated: "Dernière mise à jour : 25.04.2025",
    privacyIntro: "Introduction",
    privacyIntroContent: "Cette Politique de Confidentialité décrit comment Styly.io ('nous', 'notre' ou 'nos') collecte, utilise et protège vos informations personnelles lorsque vous utilisez notre plateforme de design d'intérieur alimentée par l'IA. Nous nous engageons à protéger votre vie privée et à nous conformer au Règlement Général sur la Protection des Données (RGPD) et autres lois applicables sur la protection des données.",
    dataWeCollect: "1. Données que Nous Collectons",
    dataWeCollectContent: "Nous collectons différents types de données pour fournir et améliorer nos services :",
    accountData: "Données de Compte",
    accountDataContent: "Lorsque vous créez un compte, nous collectons votre adresse e-mail, nom et informations d'authentification via Apple Sign-In. Ces données sont nécessaires pour vous fournir l'accès à nos services et gérer votre compte.",
    stylyImageData: "Données d'Images Styly",
    stylyImageDataContent: "Nous collectons et traitons les images que vous téléchargez sur notre plateforme pour la génération de design d'intérieur alimentée par l'IA. Cela inclut les images originales que vous fournissez et les sorties de design générées par l'IA que nous créons pour vous.",
    browsingData: "Données de Navigation",
    browsingDataContent: "Nous collectons automatiquement certaines informations sur votre appareil et la façon dont vous interagissez avec notre plateforme, y compris l'adresse IP, le type de navigateur, les informations sur l'appareil, les modèles d'utilisation et les cookies.",
    howWeUseData: "2. Comment Nous Utilisons Vos Données",
    howWeUseDataContent: "Nous utilisons vos données personnelles aux fins suivantes, basées sur les fondements juridiques spécifiés :",
    purposeLegalBasisTable: "Tableau des Finalités et Bases Légales",
    tableHeaderPurpose: "Finalité",
    tableHeaderLegalBasis: "Base Légale",
    tablePurpose1: "Fournir des services de design d'intérieur IA",
    tableLegalBasis1: "Exécution du contrat",
    tablePurpose2: "Gestion de compte et authentification",
    tableLegalBasis2: "Exécution du contrat",
    tablePurpose3: "Amélioration de la plateforme et analyses",
    tableLegalBasis3: "Intérêt légitime",
    tablePurpose4: "Support client",
    tableLegalBasis4: "Exécution du contrat",
    tablePurpose5: "Communications marketing (avec consentement)",
    tableLegalBasis5: "Consentement",
    whoHasAccess: "3. Qui a Accès à Vos Données",
    whoHasAccessContent: "Nous pouvons partager vos données personnelles avec les parties suivantes dans des circonstances spécifiques :",
    authorities: "Autorités",
    authoritiesContent: "Nous pouvons divulguer vos données aux forces de l'ordre, autorités réglementaires ou autres agences gouvernementales lorsque requis par la loi, ordonnance du tribunal, ou pour protéger nos droits et sécurité.",
    thirdPartyProviders: "Fournisseurs de Services Tiers",
    thirdPartyProvidersContent: "Nous travaillons avec des fournisseurs de services de confiance qui nous aident à exploiter notre plateforme, y compris les services d'hébergement cloud (AWS), les services d'authentification (Apple) et les fournisseurs d'analyses. Ces fournisseurs sont contractuellement tenus de protéger vos données.",
    dataRetention: "4. Conservation des Données",
    dataRetentionContent: "Nous conservons vos données personnelles pendant différentes périodes selon le type de données et la finalité :",
    retentionAccount: "Données de Compte",
    retentionAccountContent: "Conservées pendant la durée de votre compte plus 3 ans après la suppression du compte à des fins légales et commerciales.",
    retentionImages: "Données d'Images",
    retentionImagesContent: "Les images originales téléchargées sont supprimées après 30 jours. Les designs générés par l'IA sont conservés pendant 1 an sauf si vous demandez une suppression plus tôt.",
    retentionBrowsing: "Données de Navigation",
    retentionBrowsingContent: "Les données d'analyse et d'utilisation sont conservées pendant 2 ans à des fins d'amélioration de la plateforme.",
    internationalTransfers: "5. Transferts Internationaux",
    internationalTransfersContent: "Vos données peuvent être transférées et traitées dans des pays en dehors de l'Espace Économique Européen (EEE). Nous nous assurons que des garanties appropriées sont en place, y compris les Clauses Contractuelles Standard et les décisions d'adéquation, pour protéger vos données conformément aux exigences du RGPD.",
    dataSecurity: "6. Sécurité des Données",
    dataSecurityContent: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre l'accès non autorisé, l'altération, la divulgation ou la destruction. Cela inclut le chiffrement, les contrôles d'accès, les évaluations de sécurité régulières et la formation du personnel sur la protection des données.",
    yourRights: "7. Vos Droits",
    yourRightsContent: "Sous le RGPD, vous avez les droits suivants concernant vos données personnelles :",
    rightAccess: "Droit d'accès : Demander des copies de vos données personnelles",
    rightRectification: "Droit de rectification : Demander la correction de données inexactes",
    rightErasure: "Droit à l'effacement : Demander la suppression de vos données",
    rightRestriction: "Droit de limitation du traitement : Limiter la façon dont nous utilisons vos données",
    rightPortability: "Droit à la portabilité des données : Recevoir vos données dans un format portable",
    rightObject: "Droit d'opposition : S'opposer au traitement basé sur des intérêts légitimes",
    rightWithdrawConsent: "Droit de retirer le consentement : Retirer le consentement pour les communications marketing",
    rightComplaint: "Droit de déposer une plainte : Contacter votre autorité locale de protection des données",
    privacyChanges: "8. Modifications de Cette Politique de Confidentialité",
    privacyChangesContent: "Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Nous vous informerons de tout changement important en publiant la nouvelle Politique de Confidentialité sur notre site web et en mettant à jour la date de 'Dernière mise à jour'. Votre utilisation continue de nos services après de tels changements constitue l'acceptation de la politique mise à jour.",
    privacyContact: "9. Contact",
    privacyContactContent: "Si vous avez des questions concernant cette Politique de Confidentialité ou souhaitez exercer vos droits, veuillez nous contacter à contact@styly.io. Nous répondrons à votre demande dans les 30 jours comme requis par le RGPD.",

    // Stats section
    statsHeading1: "STYLY : Pas le hasard, mais l'aboutissement d'une",
    statsHeading2: "recherche quantitative rigoureuse.",
    statsHours: "Heures de développement",
    statsDesigners: "Top Designers approuvés",
    statsCompanies: "Entreprises de confiance",
    statsArticles: "Articles de recherche",

    // Blog section
    blogTrends: "Blogue",
    blogDescription:
      "Les dernières actualités du secteur, interviews, technologies et ressources sur le logiciel design intérieur gratuit et planificateur chambre IA.",
    realEstateLandscape:
      "Le paysage immobilier a fondamentalement changé depuis 2023",
    generationalTrendsReport: "Rapport sur les tendances générationnelles",
    buyersBeginSearch:
      "99 % des acheteurs de maison commencent leur recherche en ligne, rendant la présentation numérique non seulement importante mais essentielle pour le succès des ventes.",
    virtualStagingRevolution:
      "La révolution du home staging virtuel : Statistiques du marché actuel",
    propertiesWithAIStaging:
      "Les propriétés avec home staging virtuel AI reçoivent 2,7 fois plus de demandes que les annonces traditionnelles",
    virtuallyStagedSellFaster:
      "Les propriétés avec home staging virtuel se vendent 31 % plus rapidement que les maisons non mises en scène",
    aiStagingCostReduction:
      "Le home staging AI permet une réduction de coûts de 98 % par rapport au home staging physique",
    propertiesWithAIEnhancedPhotos:
      "Les propriétés avec photos améliorées par AI commandent des prix de vente 5 à 8 % plus élevés",
    buyersStruggleToVisualize:
      "92 % des acheteurs ont du mal à visualiser le potentiel dans les espaces vides",
    source: "Source :",
    realEstateStagingAssociation:
      "Rapport d'impact de l'Association de home staging immobilier 2025",
    whyAIStagingIndustryStandard:
      "Pourquoi le home staging virtuel AI est désormais la norme de l'industrie",
    economicEfficiency: "Efficacité économique",
    economicEfficiencyDescription:
      "Sur le marché immobilier fluctuant de 2025, le home staging physique traditionnel coûte entre 3500 $ et 10 000 $ par propriété, tandis que le home staging virtuel AI avec Styly.io commence à moins de 100 $ par propriété.",
    speedToMarket: "Avantage en termes de rapidité de mise sur le marché",
    speedToMarketDescription:
      "Avec Styly.io, je peux avoir des photos mises en scène professionnellement prêtes en moins d'une heure après que le photographe ait livré les images brutes.",
    marketSpecificCustomization: "Personnalisation spécifique au marché",
    marketSpecificCustomizationDescription:
      "Le home staging virtuel AI actuel permet aux agents de cibler des segments d'acheteurs spécifiques avec des conceptions personnalisées, d'ajuster la mise en scène en fonction des retours du marché en temps réel, de créer des variations saisonnières et de générer plusieurs options de conception pour des préférences d'acheteurs diverses.",
    targetSpecificBuyerDemographics:
      "Cibler des segments d'acheteurs spécifiques avec des conceptions personnalisées",
    adjustStagingRealTimeFeedback:
      "Ajuster la mise en scène en fonction des retours du marché en temps réel",
    createSeasonalVariations:
      "Créer des variations saisonnières pour maintenir les annonces fraîches",
    generateDesignOptions:
      "Générer plusieurs options de conception pour des préférences d'acheteurs diverses",
    realWorldSuccessStories: "Histoires de réussite réelles de 2025",
    caseStudy1Title: "Étude de cas 1 : Développement à usage mixte à Austin",
    caseStudy1Property:
      "Propriété : Construction neuve de 12 unités, complètement vide",
    caseStudy1Challenge:
      "Défi : Nécessité de pré-vendre 60 % avant la fin de la construction",
    caseStudy1Solution:
      "Solution : Mise en scène AI avec Styly.io montrant plusieurs options de configuration",
    caseStudy1Result: "Résultat : 75 % pré-vendus en 45 jours",
    caseStudy2Title: "Étude de cas 2 : Projet de rénovation historique",
    caseStudy2Property:
      "Propriété : Artisan du 1920 nécessitant des mises à jour importantes",
    caseStudy2Challenge:
      "Défi : Les acheteurs ne pouvaient pas visualiser les possibilités modernes",
    caseStudy2Solution:
      "Solution : Rénovation virtuelle montrant l'intérieur contemporain tout en préservant le caractère",
    caseStudy2Result:
      "Résultat : Vendu 12 % au-dessus des comparables du quartier",
    agentImplementationTitle:
      "Comment les principaux agents utilisent le home staging AI en 2025",
    segmentedMarketingApproaches: "Approches marketing segmentées",
    segmentedMarketingDescription:
      "Les agents sophistiqués d'aujourd'hui utilisent Styly.io pour créer des présentations ciblées pour divers segments d'acheteurs.",
    emptyNesterDownsizing: "Concepts de downsizing pour les retraités",
    firstTimeHomebuyer: "Configurations pour les acheteurs de première maison",
    workFromHomeLayouts: "Agencements optimisés pour le télétravail",
    multigenerationalLiving: "Aménagements pour une vie multigénérationnelle",
    renovationVisualizationTitle: "Visualisation de la rénovation",
    renovationVisualizationDescription:
      "Avec des coûts de construction à des niveaux historiques, les agents montrent le potentiel des rénovations.",
    energyEfficientUpgrades:
      "Améliorations énergétiques avec économies projetées",
    spaceReconfiguration: "Possibilités de reconfiguration de l'espace",
    modernUpdates: "Mises à jour modernes des propriétés anciennes",
    accessibilityModifications: "Modifications pour l'accessibilité",
    digitalMarketingIntegration: "Intégration du marketing numérique",
    digitalMarketingDescription:
      "Les propriétés mises en scène avec Styly.io en 2025 connaissent une bien plus grande engagement sur les plateformes sociales.",
    higherEngagement: "53 % d'engagement en plus sur les plateformes sociales",
    longerTimeSpent: "2,2 fois plus de temps passé sur les pages des annonces",
    moreSavedListings:
      "40 % de plus de listes enregistrées/ajoutées aux favoris",
    higherQualityLeads: "Des prospects de bien meilleure qualité",
    currentMarketAnalysis: "Analyse actuelle du marché et prévisions",
    marketAnalysisDescription:
      "Selon le rapport 2025 de McKinsey & Company sur la technologie immobilière :",
    realEstateTechReport: "Rapport sur la technologie immobilière",
    aiStagingAdoption:
      "L'adoption du home staging AI a atteint 78 % parmi les agents performants",
    luxuryPropertiesUseAI:
      "94 % des propriétés de luxe utilisent désormais le home staging AI comme norme",
    virtualStagingMarketGrowth:
      "Le marché du home staging virtuel a augmenté de 87 % depuis 2023",
    declineOfPhysicalStaging:
      "Les services de home staging physique ont diminué de 35 %",
    evidenceBasedBestPractices:
      "Pratiques recommandées basées sur les données pour 2025",
    strategicApplication: "Application stratégique",
    marketResponsiveDesign: "Conception réactive au marché",
    highResolutionImages: "Images grand angle de haute résolution",
    consistentHeightPerspective: "Hauteur et perspective cohérentes",
    cleanSpacesForAI:
      "Espaces vides et propres pour un traitement optimal par l'IA",
    focusOnProblematicSpaces:
      "Se concentrer d'abord sur les espaces problématiques",
    showcaseVersatility:
      "Mettre en valeur la polyvalence des pièces principales",
    demonstrateLifestylePossibilities:
      "Démontrer les possibilités de modes de vie",
    researchLocalPreferences: "Étudier les préférences locales des acheteurs",
    alignWithDesignTrends: "S'aligner avec les tendances actuelles du design",
    considerPropertyElements:
      "Tenir compte des éléments architecturaux propres à la propriété",
    expertAnalysis: "Analyse d'expert",
    expertAnalysisQuote:
      "\"La question n'est plus de savoir s'il faut utiliser le home staging AI, mais comment l'utiliser de manière plus efficace.\"",
    the2025Reality: "La réalité de 2025",
    aiStagingEmbeddedInPractice:
      "Le home staging virtuel AI est désormais fermement intégré dans les pratiques immobilières réussies.",
    transformRealEstateBusiness:
      "Transformez votre entreprise immobilière aujourd'hui",
    experienceAIAdvantage:
      "Découvrez l'avantage réel du home staging virtuel AI avec Styly.io.",
    meetBuyerExpectations: "Répondez aux attentes des acheteurs modernes",
    maximizePropertyValues:
      "Maximisez la valeur des propriétés sur tous les marchés",
    reduceDaysOnMarket: "Réduisez le temps de mise sur le marché",
    scaleMarketingEfforts: "Accélérez les efforts marketing efficacement",
    deliverConsistentPresentation:
      "Offrez une présentation professionnelle et cohérente",
    realEstateVirtualStaging:
      "Guide ultime pour les intérieurs Instagramables de Gen Z",

    // Blog post titles for French translation
    realEstateAgentsAIVirtualStagingTitle:
      "Comment les Agents Immobiliers Boostent leurs Ventes avec le Home Staging Virtuel IA : La Réalité du Marché 2025",
    genZInstagramWorthyInteriorsTitle:
      "Guide Ultime de la Génération Z pour des Intérieurs Dignes d'Instagram",
    buildHouseAIToolsPorchDesignTitle:
      "Comment Construire sa Propre Maison avec les Outils IA, y compris la Conception de Porche",
    ultimateGuideAIInteriorDesignTitle:
      "Le Guide Ultime des Outils de Design d'Intérieur IA en 2025 : Une Comparaison Complète",
    eightStunningAIBedroomDesignsTitle:
      "Huit Designs de Chambres IA Époustouflants : Transformez Votre Espace avec Styly.io",
    expertTipsHomeInteriorsTitle:
      "10 Conseils d'Experts pour Économiser Gros sur l'Intérieur de la Maison en 2025",
    howRealEstateAgentsBoostSales:
      "Comment les agents immobiliers augmentent les ventes avec le home staging virtuel AI : La réalité du marché de 2025",
    genZUltimateGuideToInteriors:
      "Guide ultime pour les intérieurs Instagramables de Gen Z",
    howToBuildYourHouse:
      "Comment construire votre propre maison avec des outils AI incluant le design de la terrasse",
    ultimateGuideToAIInteriorDesign:
      "Guide ultime pour les outils de design d'intérieur IA en 2025 : Une comparaison complète",
    eightStunningAIBedroomDesigns:
      "Huit designs d'intérieurs AI-générés : Transformez votre espace avec Styly.io",
    expertTipsOnHomeInteriors:
      "10 conseils experts pour économiser de l'argent sur les intérieurs en 2025",

    // New blog post titles
    top5ChallengesInteriorDesignTitle: "Top 5 des Défis en Design d'Intérieur et Comment l'IA Peut les Résoudre",
    commercialInteriorDesignAITitle: "Comment l'IA Façonne l'Avenir du Design d'Intérieur Commercial",
    creatingOutdoorSpacesAITitle: "Créer des Espaces Extérieurs avec l'IA : Un Guide pour Concevoir des Extérieurs Époustouflants",
    costEffectivenessAIDesignTitle: "La Rentabilité de l'IA en Design : Comment Styly Vous Fait Économiser",
    transformingSmallLivingSpacesTitle: "Transformer les Petits Espaces de Vie : Solutions de Design d'Intérieur pour Maisons Compactes",
    aiDrivenCustomizationFutureTitle: "Pourquoi la Personnalisation IA est l'Avenir du Design Intérieur",
    residentialInteriorDesignGuideTitle: "Design Intérieur Résidentiel : Un Guide pour Planifier les Espaces avec Styly",
    futuristicInteriorDesignStylesTitle: "Styles de Design Intérieur Futuriste : Comment l'IA Styly Façonne les Maisons de Demain",
    roomPlannerAISarahJohnsonEvaluationsTitle: "Le Bon, le Mauvais et le Planificateur IA : Évaluations Honnêtes de Sarah Johnson sur Styly.io",
    innovativeStairRailingIdeasTitle: "Idées Innovantes de Rampes d'Escalier Intérieur : Designs Personnalisés par l'IA Styly",
    designLivingRoomLikeProTitle: "Concevoir Votre Salon Comme un Professionnel avec Styly",
    futureWorkspaceAIOfficeInteriorsTitle: "Concevoir l'Espace de Travail du Futur : Intérieurs de Bureau Alimentés par l'IA avec Styly",
    newBlog2Title: "Concevoir la Mise en Scène Intérieure IA sur AWS : Dans les Coulisses de Styly",
    generativeAIRevolutionizingDesignTitle: "How Generative AI is Revolutionizing Interior Design?",
    aiAssistantInteriorDesignPromptsTitle: "AI Assistant in Interior Design - Best Prompts for ChatGPT, Gemini, Mistral",
    stylyVivaTechPartnershipTitle: "How Styly & Viva Technology Are Shaping the Future of AI-Powered Design",
    chatGPTInteriorDesignTitle: "Can ChatGPT Design Your Home? Exploring AI's Role in Interior Design",
    unlockingPowerAIInteriorDesignTitle: "Unlocking the Power of AI for Interior Design: Your Guide to the Latest Innovations",
    footerTrademark: "styly.io® et styly® sont des marques déposées de styly.io, Inc. Tous droits réservés.",

    marketOverview: "Aperçu du marché",
    keyEvaluationCriteria: "Critères d'évaluation clés",
    marketLeaders: "Les leaders du marché et leurs offres uniques",
    emergingInnovators: "Innovateurs émergents",
    stylyAdvantage: "L'avantage Styly.io",
    performanceMetrics: "Mesures de performance",
    caseStudy: "Étude de cas : Solutions de design transformatives",
    futureTrends: "Tendances et innovations futures",
    expertPerspectives: "Perspectives d'experts",
    makingTheRightChoice: "Faire le bon choix",
    conclusion: "Conclusion",

    // New Keys for Market Leaders
    foyr: "Foyr",
    knownForCommercialApplications: "Connu pour les applications commerciales",
    palette: "Palette",
    focusesOnColorHarmony: "Se concentre sur l'harmonie des couleurs",
    pablo: "Pablo",
    specializesInLightingDesign: "Spécialiste de la conception d'éclairage",

    // New Keys for Emerging Innovators
    reroomAI: "Reroom AI",
    notableForRenovationProjects: "Remarquable pour les projets de rénovation",
    promeAI: "PromeAI",
    specializesInTextureGeneration: "Spécialiste de la génération de textures",

    // Styly Advantage
    realTimeStyleTransferTechnology:
      "Technologie de transfert de style en temps réel",
    advancedMaterialRecognition: "Reconnaissance avancée des matériaux",
    intelligentSpaceOptimization: "Optimisation intelligente de l'espace",

    // Performance Metrics
    timeSaved: "Temps gagné",
    reductionInInitialDesignPhase:
      "réduction de la phase de conception initiale",
    clientSatisfactionRates: "Taux de satisfaction des clients",
    positiveFeedback: "retours positifs",
    costReduction: "Réduction des coûts",
    averageSavingsInProjectPlanning:
      "économies moyennes dans la planification des projets",

    // Case Study
    reduceDesignIterationTime: "Réduire le temps d'itération de conception",
    cutDesignCosts: "Réduire les coûts de conception",

    // Future Trends
    integrationOfARVRTechnologies: "Intégration des technologies AR/VR",
    sustainableDesignAutomation: "Automatisation de la conception durable",

    // Expert Perspectives
    aiToolsAreNotReplacingDesigners:
      "Les outils d'IA ne remplacent pas les designers, ils les aident à être plus créatifs et efficaces",

    // Making the Right Choice
    yourSpecificNeedsAndUseCases:
      "Vos besoins spécifiques et cas d'utilisation",
    budgetConstraints: "Contraintes budgétaires",

    // Conclusion
    whileEachPlatformOffersUniqueAdvantages:
      "Bien que chaque plateforme offre des avantages uniques",
    emergesAsAComprehensiveSolution:
      "émerge comme une solution complète alliant des capacités d'IA puissantes et des fonctionnalités faciles à utiliser",
    // Table of Contents
    tableOfContents: "Table des matières:",
    introduction: "Introduction",
    aiInBedroomDesign: "L'IA dans la conception de chambres",
    stylyioOverview:
      "Styly.io : Votre compagnon de conception de chambres alimenté par l'IA",
    eightAIPoweredBedroomDesigns:
      "Huit conceptions de chambres alimentées par l'IA",
    expertDesignTips: "Conseils d'experts en conception",

    // Introduction
    introductionText:
      "Les chambres sont nos sanctuaires. Selon la National Sleep Foundation, nous y passons environ un tiers de notre vie. Il est essentiel de créer un espace qui favorise à la fois le confort et le style. Des outils d'IA comme Styly.io révolutionnent la conception des chambres.",

    // AI in Bedroom Design
    aiInBedroomDesignText:
      "Une étude récente de la revue Interior Design a révélé que les outils d'IA réduisent de 60 % le temps de conception initial. Cela donne aux designers plus de place pour personnaliser et perfectionner leurs conceptions.",

    // Styly.io Overview
    stylyioOverviewText:
      "Que vous soyez designer ou propriétaire, Styly.io vous aide à créer facilement de magnifiques espaces de chambre. Il combine une IA avancée avec un design intuitif.",

    // Eight AI-Powered Bedroom Designs
    scandinavianSerenity: "Sérénité scandinave",
    scandinavianBedroomPrompt:
      "Chambre scandinave : design minimaliste, meubles en bois clair, murs blancs, lumière naturelle...",
    modernLuxurySuite: "Suite de luxe moderne",
    modernLuxurySuitePrompt:
      "Chambre contemporaine de luxe : hauts plafonds, détails métalliques champagne, éclairage intelligent...",
    coastalRetreat: "Retraite côtière",
    coastalBedroomPrompt:
      "Chambre côtière : bleus doux et beiges sable, rideaux légers, ambiance de plage...",
    urbanIndustrial: "Industriel urbain",
    urbanIndustrialPrompt:
      "Chic industriel : briques apparentes, fenêtres en acier, accents en cuir...",
    bohemianDreams: "Rêves bohèmes",
    bohemianDreamsPrompt:
      "Ambiance boho : macramé, plantes, tapis vintage, éclairage cosy...",
    japaneseZen: "Zen japonais",
    japaneseZenPrompt:
      "Minimalisme japonais : tatamis, accents en bambou, harmonie paisible...",
    midCenturyModern: "Moderne des années 50",
    midCenturyModernPrompt:
      "Moderne des années 50 : noyer, motifs géométriques, pièces iconiques...",
    contemporaryGlam: "Glamour contemporain",
    contemporaryGlamPrompt:
      "Style glamour : tête de lit en velours, éclairage cristallin, meubles en miroir...",

    // Expert Design Tips
    considerNaturalLight:
      "Tenez compte de la lumière naturelle lors du choix des couleurs",
    ensureWalkableSpace:
      "Assurez-vous qu'il y a de l'espace pour circuler autour des meubles",
    layerLighting: "Superposez les éclairages pour plus de flexibilité",
    includeHiddenStorage:
      "Ajoutez des espaces de rangement dissimulés ou intégrés",
    useCalmingMaterials:
      "Utilisez des matériaux apaisants, favorisant le sommeil",

    // Negative Prompt Guidelines
    negativePromptGuidelines: "Directives pour les prompts négatifs",
    avoidClutter: "Évitez les mises en page encombrées ou surchargées",
    keepLightingNatural: "Maintenez un éclairage naturel et cohérent",
    stickToDesignStyle: "Restez fidèle à un style de design unifié",
    maintainProportions: "Respectez les proportions et les échelles adéquates",

    // Sources and Research
    sourcesAndResearch: "Sources et recherches",
    nationalSleepFoundation: "National Sleep Foundation",
    interiorDesignMagazine: "Interior Design Magazine",
    asidAnnualReport: "Rapport annuel ASID",
    harvardHealthSleepStudies: "Études sur le sommeil de Harvard",

    // Conclusion
    conclusionText:
      "Avec Styly.io, vous pouvez concevoir votre chambre exactement comme vous l'imaginez. Des ambiances scandinaves apaisantes à un luxe de type hôtel glamour, le pouvoir est entre vos mains, soutenu par une IA intelligente.",
    creatingTrendySpaces:
      "Créer des espaces tendance et dignes d'Instagram",


    // Introduction
    introductionText1:
      "S'il y a bien une génération qui redéfinit l'expression de soi à travers les espaces personnels, c'est bien la génération Z. Armée de son téléphone portable, de préférences esthétiques marquées et d'une large audience sur les réseaux sociaux, cette génération sait comment créer et présenter des intérieurs dignes d'Instagram.",
    introductionText2:
      "Mais comment concevoir un espace qui soit tendance, personnel ET prêt pour la caméra ? Ce guide est fait pour vous. Que vous créiez un feed inoubliable ou que vous souhaitiez simplement améliorer votre espace, nous vous aiderons à créer l'intérieur parfait pour Instagram.",

    // Understanding Gen Z's Aesthetic Preferences
    understandingAestheticPreferences:
      "Comprendre les préférences esthétiques de la génération Z",
    aestheticPreferencesText:
      "La génération Z n'est pas satisfaite des designs standards. Elle mélange audacieusement l'esthétique, des touches nostalgiques et la fonctionnalité pour rendre leurs espaces véritablement uniques.",

    // Gen Z's Design Preferences
    colorPalettes: "Palettes de couleurs",
    colorPalettesText:
      "La génération Z privilégie des combinaisons de couleurs vibrantes. Pensez au vert sauge, à la lavande, aux roses doux et aux éclats de jaunes ou bleus audacieux. Leur préférence ? Personnaliser les espaces avec des couleurs qui reflètent l'individualité tout en conservant une ambiance chaleureuse.",
    eclecticFurnitureAndDecor: "Mobilier et décoration éclectiques",
    eclecticFurnitureAndDecorText:
      "Au lieu de collections de meubles grand public, la génération Z recherche des objets uniques, des trésors d'occasion et des pièces décoratives insolites. C'est le style qui rencontre la durabilité, et ce, avec un petit budget.",
    minimalistMeetsMaximalist: "Minimalisme et maximalisme",
    minimalistMeetsMaximalistText:
      "La génération Z décore selon deux extrêmes. Certains se tournent vers les styles nordiques minimalistes avec des lignes épurées et des couleurs blanches, tandis que d'autres adoptent un maximalisme total avec des textures superposées, des motifs audacieux et du désordre organisé qui semble intentionnel.",

    // Key Elements of Instagram-Worthy Interior
    keyElementsOfInstagramWorthyInterior:
      "Éléments clés d'un intérieur digne d'Instagram",
    instagramWorthyDefinition:
      "What defines \"Instagram-worthy\"? It's all about creating that wow factor. These elements can make any room pop both in real life and on camera:",
    naturalLighting: "Lumière naturelle",
    naturalLightingText:
      "L'éclairage peut faire ou défaire vos photos. De grandes fenêtres, des rideaux transparents et des miroirs stratégiquement placés maximisent la lumière naturelle. L'idée est de choisir une lumière douce et diffuse, non agressive.",
    accentWalls: "Murs d'accent",
    accentWallsText:
      "Des papiers peints funky à une galerie d'art, les murs d'accent sont un point focal frappant. Les choix populaires incluent les fresques géométriques, les murs photo faits maison et les murs recouverts de plantes.",
    statementPieces: "Pièces maîtresses",
    statementPiecesText:
      "Cela peut être un canapé en velours rétro ou un néon au-dessus du lit. Les pièces maîtresses ancrent l'esthétique de la pièce et créent de l'intérêt visuel.",
    greeneryAndPlants: "Verdure et plantes",
    greeneryAndPlantsText:
      "Chaque pièce digne d'Instagram a un peu de vert. Des feuilles de monstera luxuriantes aux plantes suspendues, les plantes apportent de la vitalité et de la vie à un espace.",
    layeredTextures: "Textures superposées",
    layeredTexturesText:
      "Pensez à des tapis doux, des couvertures épaisses, des coussins moelleux et des papiers peints texturés. Superposer des textures ajoute de la profondeur, rendant la pièce visuellement dynamique et cosy.",
    declutteredVisuals: "Visuels épurés",
    declutteredVisualsText:
      "Bien que la génération Z embrasse le chaos organisé, un encombrement bien rangé est essentiel. Des paniers décoratifs, des étagères minimalistes et du rangement caché gardent la scène propre et nette pour la caméra.",

    // Sustainability and Technology in Gen Z's Design
    incorporatingSustainabilityAndTechnology:
      "Intégration de la durabilité et de la technologie",
    sustainabilityTechText:
      "La génération Z ne se soucie pas seulement de l'esthétique, mais aussi de la planète et de la connexion. Voici comment elle intègre la durabilité et la technologie dans ses conceptions :",
    sustainableMaterials: "Matériaux durables",
    sustainableMaterialsText:
      "Le design éco-responsable est incontournable pour cette génération. Pensez à des meubles en bois recyclé, des décorations en bambou et des objets récupérés dans les magasins de seconde main. Ils privilégient des choix éthiques plutôt que les tendances de meubles jetables.",
    smartHomeTechnology: "Technologie de maison intelligente",
    smartHomeTechnologyText:
      "L'intégration de technologies comme des lumières contrôlées par la voix, des haut-parleurs intelligents et des purificateurs d'air connectés est courante. Des outils comme les plateformes de décoration intérieure alimentées par l'IA, comme le planificateur de pièces Styly, facilitent la conception.",
    multiFunctionalFurniture: "Mobilier multifonction",
    multiFunctionalFurnitureText:
      "Les petits espaces sont optimisés avec des meubles à double fonction : pensez aux poufs de rangement, aux bureaux pliables et aux lits escamotables. C'est à la fois tendance et pratique.",

    // Case Studies
    caseStudiesAndExamples: "Études de cas et exemples concrets",
    caseStudyIntro:
      "Qu'est-ce qui rend un espace célèbre sur Instagram ? Voici quelques exemples marquants d'intérieurs qui ont cassé l'algorithme :",
    viralEconomicEfficiency: "Efficacité économique",
    viralEconomicEfficiencyText:
      "Un petit appartement qui déborde de confort, avec une jungle de plantes suspendues, des meubles vintage et des tons doux. Astuce pro ? Utilisez des pots contrastants pour vos plantes !",
    geometricDreamBedroom: "Chambre de rêve géométrique",
    geometricDreamBedroomText:
      "Avec des murs géométriques pastel et des étagères minimalistes, cette chambre illustre le mélange du décor minimaliste de la génération Z avec des déclarations personnelles audacieuses.",
    cafeInspiredKitchenNook: "Coin cuisine inspiré d'un café",
    cafeInspiredKitchenNookText:
      "Une cuisine avec des tabourets industriels, des carreaux métro et des installations de café de niche a fait sensation, avec des publications atteignant des centaines de milliers de likes.",
    bohoOutdoorBalcony: "Balcon extérieur bohème",
    bohoOutdoorBalconyText:
      "Pensez à des chaises en rotin, des guirlandes lumineuses et des tapis d'extérieur superposés. C'est cosy, économique et devient un incontournable des photos nocturnes.",

    // DIY Instagram-Worthy Makeovers
    diyInstagramWorthyMakeovers:
      "Conseils pour des relooking Instagram dignes de ce nom",
    diyTipsIntro:
      "Vous voulez recréer l'un de ces espaces impressionnants ? Avec un peu de créativité et d'efforts, vous pouvez. Voici quelques astuces DIY abordables :",
    startWithMoodBoard: "Commencez avec un mood board",
    startWithMoodBoardText:
      "Utilisez un décorateur de pièces alimenté par l'IA comme le planificateur de pièces Styly. Téléchargez des images de votre espace, essayez différentes mises en page et trouvez l'inspiration qui correspond à votre style.",
    maximizeWhatYouHave: "Optimisez ce que vous avez",
    maximizeWhatYouHaveText:
      "Réorganisez les meubles existants pour voir votre pièce sous un nouvel angle. Parfois, déplacer un canapé ou un lit peut transformer la pièce.",
    getCreativeWithPaint: "Soyez créatif avec la peinture",
    getCreativeWithPaintText:
      "Un pot de peinture peut faire des merveilles ! Créez des accents ou des cadres sur les murs avec des formes audacieuses ou optez pour un coin monochromatique dans une seule teinte.",
    thriftForJewels: "Cherchez des bijoux dans les magasins de seconde main",
    thriftForJewelsText:
      "Faites du shopping dans les magasins de seconde main locaux ou les marchés antiques pour dénicher des objets insolites, comme des chaises rétro ou des vases vintage.",
    accessorizeThoughtfully: "Accessoirisez de manière réfléchie",
    accessorizeThoughtfullyText:
      "Choisissez des détails économiques comme des guirlandes lumineuses, des coussins à motifs géométriques ou des vases élégants pour rehausser votre espace.",
    playWithAnglesForPhotos: "Jouez avec les angles pour les photos",
    playWithAnglesForPhotosText:
      "Une fois que votre espace est prêt, expérimentez avec les angles de caméra, l'éclairage et les filtres photo pour capturer son charme.",
    socialMediaShapingDesignTrends:
      "Le rôle des médias sociaux dans la définition des tendances de design",
    socialMediaShapingDesignTrendsText:
      "Les médias sociaux ne servent pas seulement à exposer : ils façonnent ce qui est tendance. Voici comment Instagram joue un rôle clé :",
    crowdsourcingCreativity: "Collecte de créativité",
    crowdsourcingCreativityText:
      "Grâce à des hashtags comme #RoomGoals ou #AestheticInteriors, les gens peuvent facilement s'inspirer. Les tendances se propagent rapidement grâce à cette visibilité.",
    massAppealToNicheInterests: "Appel massif aux intérêts de niche",
    massAppealToNicheInterestsText:
      "Platforms give rise to niche aesthetics such as \"cottage core\" or \"dark academia,\" helping like-minded groups build communities.",
    interactiveShopping: "Shopping interactif",
    interactiveShoppingText:
      "Les intégrations sociales permettent désormais aux utilisateurs d'acheter directement à partir des publications inspirantes. Il suffit de cliquer et d'ajouter au panier.",
    empoweringNewCreators: "Donner du pouvoir aux nouveaux créateurs",
    empoweringNewCreatorsText:
      "Les passionnés de décoration intérieure et les influenceurs ne redéfinissent pas seulement le design, mais aussi leurs carrières. Avec des milliers de followers, ils dictent l'avenir du design d'intérieur.",
    shareYourBestSpace: "Partagez votre meilleur espace",
    shareYourBestSpaceText:
      "Créer un intérieur digne d'Instagram implique de la créativité, des outils technologiques et un sens du détail. Mais surtout, cela parle de VOUS.",
    shareYourBestSpaceInstagram:
      "Quelle est votre astuce préférée ? Partagez vos espaces Insta-dignes avec nous @Stylyio, et n'oubliez pas d'essayer notre planificateur de pièces IA pour concevoir votre prochain chef-d'œuvre.",
    prevArticle: "Article précédent",
    nextArticle: "Article suivant",

    expertTipsIntroductionText1:
      "Transformer l'intérieur de votre maison ne doit pas coûter une fortune. Avec l'avènement des outils avancés comme",
    expertTipsStylyAI: "les outils gratuits de conception de chambres alimentés par l'IA de Styly",
    expertTipsIntroductionText2:
      ", vous pouvez obtenir des résultats étonnants avec un budget limité. Voici 10 conseils d'experts pour vous aider à économiser gros sur l'intérieur de votre maison tout en utilisant les derniers outils alimentés par l'IA.",

    // Tips
    planBeforeYouSpend: "Planifiez avant de dépenser",
    planBeforeYouSpendContent:
      "Une bonne planification est essentielle pour éviter les dépenses inutiles. Utilisez des outils gratuits de conception intérieure alimentés par l'IA comme Styly pour visualiser vos idées avant de vous y engager.",
    optimizeRoomLayoutWithAI: "Optimisez la disposition de la pièce avec l'IA",
    optimizeRoomLayoutWithAIContent:
      "Exploitez un décorateur de pièces IA pour expérimenter les agencements. Des outils comme Styly peuvent fournir plusieurs options de conception pour utiliser efficacement l'espace.",
    upcycleFurniture: "Recyclage des meubles",
    upcycleFurnitureContent:
      "Donnez un nouveau look à vos meubles en les recyclant. Associez cela aux fonctionnalités de conception de pièces IA de Styly pour visualiser les pièces rénovées dans vos intérieurs.",
    focusOnDIYProjects: "Concentrez-vous sur les projets DIY",
    focusOnDIYProjectsContent:
      "Ajoutez une touche personnelle avec des décorations DIY. Utilisez des outils gratuits de conception intérieure alimentés par l'IA pour guider vos projets et les aligner avec votre thème de design.",
    shopSmartForMaterials: "Achetez intelligemment vos matériaux",
    shopSmartForMaterialsContent:
      "Recherchez des réductions ou des options d'occasion. Les outils IA aident à visualiser comment les matériaux fonctionneront, évitant ainsi les achats inutiles.",
    prioritizeKeyElements: "Priorisez les éléments clés",
    prioritizeKeyElementsContent:
      "Concentrez votre budget sur des éléments impactants comme l'éclairage. Les outils de conception IA aident à identifier des options abordables et de grande valeur.",
    experimentWithColorsVirtually: "Expérimentez virtuellement les couleurs",
    experimentWithColorsVirtuallyContent:
      "Avant d'acheter, testez des palettes de couleurs à l'aide des outils gratuits de Styly. Économisez de l'argent en obtenant la bonne couleur dès la première tentative.",
    investInMultiFunctionalFurniture: "Investissez dans du mobilier multifonction",
    investInMultiFunctionalFurnitureContent:
      "Optez pour des articles comme des canapés-lits ou des ottomans avec rangement. Visualisez-les avec des outils IA pour garantir le meilleur ajustement.",
    useAIForAccessoryPlacement: "Utilisez l'IA pour le placement des accessoires",
    useAIForAccessoryPlacementContent:
      "L'IA de Styly peut recommander où placer les accessoires pour un look soigné sans trop acheter.",
    stayUpdatedWithTrends: "Restez à jour avec les tendances",
    stayUpdatedWithTrendsContent:
      "Les plateformes IA offrent des informations sur les tendances. Utilisez-les pour intégrer des mises à jour stylées sans devoir tout refaire.",

    // Why Choose Styly
    whyChooseStyly: "Pourquoi choisir Styly pour l'intérieur de votre maison ?",
    stylyDescription:
      "Les outils gratuits de conception intérieure alimentés par l'IA de Styly facilitent la création d'intérieurs personnalisés et économiques. Que vous redécoriez une pièce ou toute votre maison, Styly vous permet de :",
    visualizeDesigns: "Visualisez instantanément les conceptions",
    experimentWithLayouts: "Expérimentez avec des agencements et des styles",
    saveMoney: "Économisez de l'argent en évitant des erreurs coûteuses",
    getStartedWithStyly:
      "Commencez avec Styly aujourd'hui et simplifiez-vous la vie pour l'aménagement de vos intérieurs en 2025.",
    freeAIRoomDesign: "outils gratuits de conception de chambres IA",
    transformYourSpace: "et transformez votre espace comme un pro !",

    // Revolutionizing Architecture blog post
    revolutionizingArchitectureTitle: "Révolutionner l'Architecture, l'Ingénierie et la Construction avec l'IA",
    revolutionizingArchitectureIntro: "Découvrez comment l'intelligence artificielle transforme l'industrie AEC avec des solutions de design innovantes et une efficacité améliorée.",
    revolutionizingArchitectureTableOfContents: "Table des Matières",
    revolutionizingArchitectureIntroduction: "Introduction",
    revolutionizingArchitectureIntroductionText: "L'industrie de l'Architecture, de l'Ingénierie et de la Construction (AEC) se trouve au bord d'une révolution technologique. L'Intelligence Artificielle (IA) n'est plus un concept futuriste mais une réalité présente qui redéfinit la façon dont nous concevons, planifions et construisons notre environnement bâti. De la génération automatisée de designs à la maintenance prédictive, l'IA transforme chaque aspect du cycle de vie de la construction.",
    revolutionizingArchitectureAITransformation: "La Transformation IA dans l'AEC",
    revolutionizingArchitectureAITransformationText: "L'intégration de l'IA dans l'industrie AEC représente un changement de paradigme des méthodes traditionnelles vers des approches intelligentes et basées sur les données. Les algorithmes d'apprentissage automatique peuvent maintenant analyser de vastes ensembles de données pour optimiser les performances des bâtiments, prédire les problèmes structurels et générer des solutions de design innovantes qui étaient auparavant impossibles à concevoir.",
    revolutionizingArchitectureKeyBenefits: "Avantages Clés de l'IA dans l'Architecture et la Construction",
    revolutionizingArchitectureKeyBenefitsText: "La mise en œuvre des technologies IA dans le secteur AEC apporte de nombreux avantages qui révolutionnent l'industrie :",
    revolutionizingArchitectureBenefit1: "Efficacité de Design Améliorée",
    revolutionizingArchitectureBenefit1Text: "Les outils de design alimentés par l'IA peuvent générer plusieurs itérations de design en minutes, permettant aux architectes d'explorer plus de possibilités créatives tout en réduisant significativement le temps de mise sur le marché.",
    revolutionizingArchitectureBenefit2: "Estimation des Coûts Améliorée",
    revolutionizingArchitectureBenefit2Text: "Les algorithmes d'apprentissage automatique analysent les données historiques de projets pour fournir des prédictions de coûts plus précises, aidant à prévenir les dépassements de budget et améliorer la rentabilité des projets.",
    revolutionizingArchitectureBenefit3: "Maintenance Prédictive",
    revolutionizingArchitectureBenefit3Text: "Les systèmes IA peuvent surveiller les performances des bâtiments en temps réel et prédire les besoins de maintenance avant que les problèmes ne deviennent critiques, prolongeant la durée de vie des bâtiments et réduisant les coûts opérationnels.",
    revolutionizingArchitectureBenefit4: "Optimisation du Design Durable",
    revolutionizingArchitectureBenefit4Text: "Les algorithmes IA peuvent optimiser les designs de bâtiments pour l'efficacité énergétique, l'utilisation des matériaux et l'impact environnemental, soutenant le mouvement de l'industrie vers des pratiques de construction durables.",
    revolutionizingArchitectureRealWorldApplications: "Applications du Monde Réel",
    revolutionizingArchitectureRealWorldApplicationsText: "L'IA fait déjà des impacts significatifs dans divers aspects de l'industrie AEC :",
    revolutionizingArchitectureApplication1: "Design Génératif",
    revolutionizingArchitectureApplication1Text: "Des outils comme Dreamcatcher d'Autodesk et la plateforme de design d'intérieur IA de Styly.io utilisent des algorithmes pour générer des milliers d'options de design basées sur des paramètres spécifiés, permettant aux architectes de découvrir des solutions innovantes.",
    revolutionizingArchitectureApplication2: "Sécurité des Chantiers de Construction",
    revolutionizingArchitectureApplication2Text: "Les systèmes de vision par ordinateur alimentés par l'IA surveillent les chantiers de construction en temps réel, identifiant les dangers de sécurité et assurant la conformité aux protocoles de sécurité, réduisant significativement les accidents du travail.",
    revolutionizingArchitectureApplication3: "Amélioration de la Modélisation des Informations du Bâtiment (BIM)",
    revolutionizingArchitectureApplication3Text: "L'IA améliore les systèmes BIM en détectant automatiquement les conflits, optimisant les horaires et améliorant la collaboration entre les différentes parties prenantes du processus de construction.",
    revolutionizingArchitectureFuture: "L'Avenir de l'IA dans l'AEC",
    revolutionizingArchitectureFutureText: "Alors que la technologie IA continue d'évoluer, nous pouvons nous attendre à des applications encore plus transformatrices dans l'industrie AEC. Des robots de construction entièrement automatisés aux villes intelligentes conçues par l'IA, l'avenir promet une innovation sans précédent dans la façon dont nous créons et gérons notre environnement bâti.",
    revolutionizingArchitectureConclusion: "Conclusion",
    revolutionizingArchitectureConclusionText: "L'intégration de l'IA dans l'architecture, l'ingénierie et la construction n'est pas seulement une opportunité—c'est un impératif pour rester compétitif sur le marché moderne. Les organisations qui embrassent ces technologies aujourd'hui seront les leaders de l'environnement bâti de demain. La révolution a commencé, et le moment d'agir est maintenant.",
    revolutionizingArchitectureCTATitle: "Découvrez le Design Alimenté par l'IA Aujourd'hui",
    revolutionizingArchitectureCTAText: "Prêt à révolutionner votre processus de design ? Essayez la plateforme de design d'intérieur alimentée par l'IA de Styly.io et découvrez l'avenir de la visualisation architecturale.",
    revolutionizingArchitectureCTAButton: "Commencer avec Styly.io",

    // Interior Design Trends 2025 Blog Post
    interiorTrends2025Title: "Tendances Design d'Intérieur 2025 : Ce qui est Tendance et ce qui ne l'est Plus",
    interiorTrends2025TableOfContents: "Table des Matières",
    interiorTrends2025Introduction: "Introduction",
    interiorTrends2025IntroductionText: "Alors que nous entrons dans 2025, le monde du design d'intérieur continue d'évoluer, mêlant créativité et technologie comme jamais auparavant. Pour les propriétaires, les designers d'intérieur et les passionnés de design, les dernières tendances façonnent non seulement l'esthétique des espaces mais mettent également l'accent sur la fonctionnalité, la durabilité et la personnalisation. Dans ce blog, nous explorons ce qui est tendance et ce qui ne l'est plus dans les tendances design d'intérieur 2025—et comment vous pouvez utiliser les outils gratuits de design de chambre IA comme Styly pour rester à la pointe.",
    interiorTrends2025WhatsIn: "Ce qui est Tendance : Tendances Design d'Intérieur 2025",
    interiorTrends2025WhatsOut: "Ce qui ne l'est Plus : Tendances à Abandonner",
    interiorTrends2025StylyRole: "Comment Styly Révolutionne le Design d'Intérieur",
    interiorTrends2025Conclusion: "Conclusion",
    interiorTrends2025EcoConscious: "1. Design Éco-Responsable",
    interiorTrends2025EcoConsciousText: "La durabilité occupe le devant de la scène alors que les propriétaires privilégient les matériaux écologiques comme le bois récupéré, le bambou et le métal recyclé. L'intégration de verdure par des plantes d'intérieur et des jardins verticaux est également une tendance majeure.",
    interiorTrends2025EcoConsciousStyly: "Comment Styly Aide : Avec notre plateforme gratuite de design d'intérieur IA, vous pouvez expérimenter avec des aménagements écologiques et visualiser des matériaux durables dans votre espace avant de vous engager dans un achat.",
    interiorTrends2025Biophilic: "2. Éléments Biophiliques",
    interiorTrends2025BiophilicText: "La connexion entre la nature et le design s'approfondit, avec des motifs, textures et couleurs biophiliques devenant des éléments clés. Pensez aux tons terreux, fibres naturelles et formes organiques.",
    interiorTrends2025BiophilicStyly: "Conseil Styly : Utilisez notre décorateur de chambre IA pour explorer des designs inspirés de la nature adaptés à vos préférences.",
    interiorTrends2025SmartHome: "3. Intégration Maison Intelligente",
    interiorTrends2025SmartHomeText: "Le design d'intérieur en 2025 intègre parfaitement la technologie. Des systèmes d'éclairage intelligents aux appareils alimentés par l'IA, les maisons deviennent plus intuitives et efficaces.",
    interiorTrends2025SmartHomeStyly: "Comment Vous en Bénéficiez : Les fonctionnalités gratuites de design d'intérieur IA de Styly facilitent la création d'aménagements intelligents et la planification de l'intégration technologique dans votre design.",
    interiorTrends2025BoldColors: "4. Couleurs Audacieuses et Maximalisme",
    interiorTrends2025BoldColorsText: "Fini le temps des espaces strictement minimalistes. Les teintes vibrantes, motifs éclectiques et décor maximaliste sont en vogue, reflétant l'individualité et un sens du jeu.",
    interiorTrends2025BoldColorsStyly: "Rôle de Styly : Expérimentez avec des palettes de couleurs audacieuses en utilisant nos outils gratuits de design de chambre IA et voyez ce qui fonctionne le mieux pour votre espace.",
    interiorTrends2025Multifunctional: "5. Espaces Multifonctionnels",
    interiorTrends2025MultifunctionalText: "Avec les tendances de télétravail qui persistent, les pièces multifonctionnelles qui servent de bureaux, salles de sport ou centres de divertissement sont indispensables.",
    interiorTrends2025MultifunctionalStyly: "Avantage Styly : Planifiez et concevez des espaces polyvalents sans effort avec le logiciel gratuit de design de chambre IA de Styly.",
    interiorTrends2025OverlyMinimalistic: "1. Intérieurs Excessivement Minimalistes",
    interiorTrends2025OverlyMinimalisticText: "Bien que le minimalisme ne soit pas entièrement disparu, l'aspect austère et froid des espaces ultra-minimalistes s'estompe. Les propriétaires embrassent maintenant la chaleur, le confort et la personnalisation.",
    interiorTrends2025AllWhiteKitchens: "2. Cuisines Entièrement Blanches",
    interiorTrends2025AllWhiteKitchensText: "Les cuisines entièrement blanches sont remplacées par des tons chauds et terreux ou des touches vibrantes de couleur qui rendent le cœur de la maison plus accueillant.",
    interiorTrends2025OpenShelving: "3. Surcharge d'Étagères Ouvertes",
    interiorTrends2025OpenShelvingText: "Bien que les étagères ouvertes restent fonctionnelles, leur utilisation excessive est remplacée par un mélange d'armoires fermées et d'affichages ouverts soigneusement sélectionnés.",
    interiorTrends2025FastFurniture: "4. Mobilier Jetable",
    interiorTrends2025FastFurnitureText: "Le mobilier jetable qui ne dure pas tombe en disgrâce. À la place, les pièces durables et de haute qualité avec un attrait intemporel sont tendance.",
    interiorTrends2025StylyRoleText: "Avec la technologie de pointe de Styly, vous pouvez exploiter la puissance de l'IA pour créer des intérieurs époustouflants et personnalisés sans effort. Que vous soyez un propriétaire cherchant l'inspiration ou un designer d'intérieur planifiant des espaces, notre plateforme offre :",
    interiorTrends2025StylyFeature1: "Outils Gratuits de Design d'Intérieur IA : Commencez gratuitement avec des fonctionnalités de design intuitives.",
    interiorTrends2025StylyFeature2: "Décorateur de Chambre IA : Générez et visualisez des idées de design adaptées à votre style et besoins.",
    interiorTrends2025StylyFeature3: "Solutions Gratuites de Design de Chambre IA : Planifiez, personnalisez et perfectionnez chaque détail de votre espace.",
    interiorTrends2025ConclusionText: "Les tendances de design d'intérieur pour 2025 consistent à fusionner le style avec la substance, la durabilité et la technologie. Que vous rénoviez votre salon ou conceviez un espace complètement nouveau, rester à la mode est plus facile que jamais avec les outils gratuits de design d'intérieur IA de Styly.",
    interiorTrends2025CTATitle: "Commencez Votre Voyage Design Aujourd'hui",
    interiorTrends2025CTAText: "Transformez vos espaces sans effort avec les outils gratuits de design d'intérieur IA de Styly. Découvrez l'avenir du design d'intérieur et créez la maison de vos rêves en quelques clics.",
    interiorTrends2025CTAButton: "Commencer avec Styly.io",

    // Enhanced content with links and references
    interiorTrends2025BiophilicLink: "Découvrez notre guide complet sur la création de designs d'intérieur biophiliques",
    interiorTrends2025BiophilicExternal: "Selon ArchDaily, le design biophilique peut améliorer le bien-être jusqu'à 15%",
    interiorTrends2025SmartHomeCTA: "Essayez notre planificateur de chambre IA pour concevoir des espaces intelligents et connectés",
    interiorTrends2025BoldColorsExternal: "Elle Décoration rapporte que les intérieurs maximalistes sont la tendance phare de 2025",
    interiorTrends2025MultifunctionalLink: "Voir nos conseils d'experts pour créer des bureaux à domicile multifonctionnels",
    interiorTrends2025KitchenExternal: "Les données Houzz montrent que 73% des propriétaires s'éloignent des cuisines entièrement blanches",
    interiorTrends2025MinimalismLink: "Lisez notre article sur l'équilibre entre minimalisme et chaleur dans les maisons modernes",
    interiorTrends2025StylyRoleCTA: "Découvrez ces tendances de première main avec notre plateforme gratuite de design d'intérieur IA",

    // Enhanced content for Revolutionizing Architecture blog
    revolutionizingArchitectureAIDesignLink: "Explorez notre guide complet des outils de design d'intérieur alimentés par l'IA",
    revolutionizingArchitectureArchDailyExternal: "ArchDaily rapporte que l'IA transforme 85% des flux de travail architecturaux",
    revolutionizingArchitectureBIM_CTA: "Essayez notre plateforme de design IA pour créer des modèles de bâtiments intelligents",
    revolutionizingArchitectureGenerativeExternal: "Selon la recherche Autodesk, le design génératif réduit le temps de projet de 40%",
    revolutionizingArchitectureInteriorLink: "Découvrez comment l'IA révolutionne le design d'intérieur dans notre guide des dernières tendances",
    revolutionizingArchitectureSmartBuildingExternal: "AD Magazine met en avant les bâtiments intelligents comme l'avenir de l'architecture durable",
    revolutionizingArchitectureFutureLink: "Lisez nos conseils d'experts pour se préparer à l'avenir de la construction pilotée par l'IA",
    revolutionizingArchitectureFutureCTA: "Commencez à construire l'avenir aujourd'hui avec nos outils de design alimentés par l'IA",

    // Free AI Interior Design Blog Post
    freeAIDesignTitle: "Logiciel Gratuit de Design d'Intérieur IA - Transformez Votre Espace",
    freeAIDesignTableOfContents: "Table des Matières",
    freeAIDesignIntroduction: "Introduction",
    freeAIDesignIntroductionText: "Dans le monde rapide d'aujourd'hui, concevoir des espaces beaux et fonctionnels est devenu plus facile que jamais, grâce aux avancées technologiques. Styly est à l'avant-garde de cette révolution, offrant un logiciel gratuit de design d'intérieur IA qui vous permet de donner vie à vos visions créatives. Que vous soyez un propriétaire cherchant à redécorer ou un designer professionnel recherchant des outils innovants, Styly fournit la solution parfaite pour tous vos besoins de design d'intérieur.",
    freeAIDesignWhyChooseStyly: "Pourquoi Choisir Styly pour le Design de Chambre IA ?",
    freeAIDesignWhyChooseStylyText: "Styly exploite des outils avancés de design de chambre IA gratuits pour livrer des résultats exceptionnels en minutes. Avec notre plateforme intuitive, vous pouvez :",
    freeAIDesignFeature1: "Générer des aménagements de pièces époustouflants adaptés à vos préférences",
    freeAIDesignFeature2: "Expérimenter avec différents arrangements de meubles et schémas de couleurs",
    freeAIDesignFeature3: "Visualiser vos idées en 3D sans aucune expérience de design requise",
    freeAIDesignFeature4: "Économiser du temps et de l'argent en évitant les erreurs de design coûteuses",
    freeAIDesignHouzzExternal: "Houzz rapporte que les outils de design IA augmentent l'efficacité des projets de 60%",
    freeAIDesignKeyFeatures: "Caractéristiques Clés du Logiciel Gratuit de Design d'Intérieur IA de Styly",
    freeAIDesignAIPowered: "Suggestions Alimentées par l'IA",
    freeAIDesignAIPoweredText: "Notre algorithme intelligent analyse les dimensions de votre pièce, les préférences de style et les exigences fonctionnelles pour générer des suggestions de design personnalisées.",
    freeAIDesignExtensiveLibrary: "Bibliothèque de Design Étendue",
    freeAIDesignExtensiveLibraryText: "Explorez une large gamme de meubles, d'articles de décoration et de finitions pour créer un design qui reflète votre personnalité et votre style de vie.",
    freeAIDesignElleExternal: "Elle Décoration met en avant l'IA comme l'avenir du design d'intérieur personnalisé",
    freeAIDesignUserFriendly: "Interface Conviviale",
    freeAIDesignUserFriendlyText: "Pas de compétences techniques ? Pas de problème ! La fonctionnalité simple de glisser-déposer de Styly rend le design amusant et accessible à tous.",
    freeAIDesignTryNowCTA: "Essayez notre interface de design IA intuitive maintenant - aucune expérience requise",
    freeAIDesignFreeCredits: "Crédits Gratuits pour Commencer",
    freeAIDesignFreeCreditsText: "Inscrivez-vous aujourd'hui et recevez des crédits gratuits pour commencer à concevoir vos espaces de rêve.",
    freeAIDesignBenefits: "Avantages d'Utiliser Styly pour le Design de Chambre IA Gratuit",
    freeAIDesignCostEffective: "Économique",
    freeAIDesignCostEffectiveText: "Éliminez le besoin de consultations de design coûteuses",
    freeAIDesignTimeSaving: "Gain de Temps",
    freeAIDesignTimeSavingText: "Visualisez rapidement plusieurs idées de design sans longs allers-retours",
    freeAIDesignCustomizable: "Personnalisable",
    freeAIDesignCustomizableText: "Ajustez chaque élément pour correspondre à votre vision exacte",
    freeAIDesignTrendsLink: "Découvrez les dernières tendances de design d'intérieur 2025 pour inspirer vos designs générés par IA",
    freeAIDesignHowToStart: "Comment Commencer avec Styly",
    freeAIDesignStep1: "Visitez www.styly.io",
    freeAIDesignStep2: "Créez votre compte et réclamez vos crédits gratuits de design de chambre IA",
    freeAIDesignStep3: "Téléchargez les dimensions de votre pièce ou choisissez parmi les modèles prédéfinis",
    freeAIDesignStep4: "Expérimentez avec les aménagements, couleurs et meubles pour créer votre espace de rêve !",
    freeAIDesignMarieExternal: "Marie Claire Maison présente l'IA comme révolutionnant l'accessibilité de la décoration maison",
    freeAIDesignRoomDecorator: "Transformez Vos Espaces avec un Décorateur de Chambre IA Gratuit",
    freeAIDesignRoomDecoratorText: "Styly va au-delà des outils de design de base, agissant comme votre décorateur de chambre IA. Avec des options de personnalisation avancées et la capacité de visualiser les designs en temps réel, vous pouvez transformer n'importe quel espace en chef-d'œuvre.",
    freeAIDesignExpertTipsLink: "Apprenez les conseils d'experts pour le design d'intérieur économique avec les outils IA",
    freeAIDesignWhyStandsOut: "Pourquoi Styly Se Démarque",
    freeAIDesignWhyStandsOutText: "Contrairement aux autres plateformes, Styly combine une technologie IA puissante avec une interface facile à utiliser, rendant le design d'intérieur IA gratuit accessible à tous. De plus, notre focus sur le design intérieur et extérieur assure que toute votre maison reflète votre style.",
    freeAIDesignCoteMaisonExternal: "Côté Maison souligne l'importance des outils de design accessibles pour les propriétaires modernes",
    freeAIDesignExperienceCTA: "Découvrez l'avenir du design d'intérieur avec notre plateforme IA complète",
    freeAIDesignConclusion: "Conclusion",
    freeAIDesignConclusionText: "Styly change la donne pour le design d'intérieur IA gratuit en fournissant une plateforme innovante et conviviale. Que vous redécoriez une seule pièce ou réimaginiez toute votre maison, Styly offre les outils pour y arriver.",
    freeAIDesignArchitectureLink: "Explorez comment l'IA révolutionne les industries de l'architecture et de la construction",
    freeAIDesignCTATitle: "Commencez Votre Voyage de Design IA Gratuit Aujourd'hui",
    freeAIDesignCTAText: "Transformez vos espaces sans effort avec le logiciel gratuit de design d'intérieur IA de Styly. Créez des aménagements de pièces époustouflants, expérimentez avec les arrangements de meubles et donnez vie à vos visions créatives.",
    freeAIDesignCTAButton: "Commencer avec des Crédits Gratuits",

    // Real Estate Virtual Staging Blog Post - Hardcoded text translations
    transformRealEstateListings: "Transformez vos annonces immobilières avec nos outils de home staging virtuel IA",
    startBoostingRealEstateSales: "Commencez à booster vos ventes immobilières avec le home staging virtuel IA dès aujourd'hui",

    // Viral AI Room Design Prompts Blog Post
    viralAIRoomDesignPromptsTitle: "6 Prompts Viraux de Design de Chambre IA : Créez Votre Chambre de Rêve avec STYLY.io",
    viralAIRoomDesignPromptsDescription: "Découvrez 6 prompts viraux de design de chambre IA qui génèrent des résultats époustouflants. Transformez votre espace avec le designer IA de STYLY.io.",

    // New Phase 1 Blog Posts
    impactAIInteriorDesignerTitle: "L'Impact de l'IA sur le Rôle du Designer d'Intérieur : Un Avenir Collaboratif",
    aiVirtualRealityDesignTitle: "L'Intersection de l'IA et de la Réalité Virtuelle en Design : Ce que l'Avenir Nous Réserve",
    aiAccessibleDesignTitle: "L'IA dans le Design Accessible : Créer des Espaces Inclusifs avec Styly",

    // New Phase 2 Blog Posts
    dataAIPoweredDesignTitle: "Le Rôle des Données dans le Design Alimenté par l'IA : Comment les Insights Améliorent l'Esthétique",
    modernFamilyDesignTitle: "Design pour la Famille Moderne : Utiliser l'IA pour Créer des Maisons Fonctionnelles et Élégantes",
    sustainableDesignAITitle: "Design pour la Durabilité : Utiliser l'IA pour Créer des Espaces Éco-Responsables",
    aiSpacePlanningSmallApartmentsTitle: "Exploiter l'IA pour Optimiser la Planification d'Espace dans les Petits Appartements",
    biophilicDesignAITitle: "Créer des Designs d'Intérieur Biophiliques avec l'IA Styly",

    // New Phase 3 Blog Posts
    scienceColorDesignTitle: "La Science de la Couleur en Design : Comment l'IA Vous Aide à Choisir la Palette Parfaite",
    sustainableLandscapesAITitle: "Réduire l'Empreinte Carbone : Paysages Durables avec l'IA Styly",
    aiLandscapeDesignTitle: "L'IA dans le Design Paysager : Créer de Beaux Espaces Extérieurs avec Styly",
    culturalDesignAITitle: "Design d'Intérieur pour Différentes Cultures : Exploiter l'IA pour des Espaces Culturellement Sensibles",
    textureImportanceDesignTitle: "L'Importance de la Texture en Design d'Intérieur : Comment Styly Peut Aider",

    // Video Guide Page
    videoGuide: "Guide Vidéo",
    videoTutorials: "Tutoriels Vidéo",
    learnAIInteriorDesign: "Apprenez le Design Intérieur IA",
    discoverHowToUseAITools: "Découvrez comment utiliser nos outils IA pour transformer vos espaces intérieurs",
    readyToTransformSpaces: "Prêt à transformer vos espaces ?",
    getStartedWithFreeAITools: "Commencez dès maintenant avec nos outils IA gratuits",

    // Services API Page
    servicesAPI: "API",
    stylyAIAPISuite: "Suite API IA Styly",
    mostAdvancedVisualIntelligencePlatform: "La Plateforme d'Intelligence Visuelle la Plus Avancée pour le Design, le Retail et l'Immobilier",
    developerAPIs: "API Développeurs",
    requestAccess: "Demander l'Accès",
    exploreAPIDocs: "Explorer la Documentation",
    whyChooseOurAPIs: "Pourquoi Choisir Nos APIs",
    lightningFast: "Ultra-Rapide",
    scalable: "Évolutif",
    productionReady: "Prêt Production",
    global: "Global",
    millionsOfRequests: "Millions de requêtes",
    uptimeNineNineNine: "99.9% uptime",
    worldwideCDN: "CDN mondial",
    ourCoreAPIs: "Nos APIs Principales",
    fivePowerfulAPIs: "5 APIs puissantes pour transformer votre plateforme avec l'intelligence artificielle",
    aiFloorGenerationAPI: "API Génération de Sols IA",
    generateRealisticFloorDesigns: "Générez des designs de sols réalistes et personnalisés en quelques secondes",
    aiWallGenerationAPI: "API Génération de Murs IA",
    createSophisticatedWallDesigns: "Créez des designs de murs sophistiqués avec textures et couleurs",
    aiMoodboardGeneratorAPI: "API Générateur de Moodboard IA",
    createCohesiveMoodboards: "Créez des moodboards cohérents et inspirants automatiquement",
    aiRealEstateEnhancementAPI: "API Amélioration Immobilière IA",
    transformRealEstatePhotos: "Transformez les photos immobilières avec le home staging virtuel",
    aiProductVisualizationAPI: "API Visualisation Produit IA",
    integrateProductsIntoEnvironments: "Intégrez des produits dans des environnements réalistes",
    realisticMaterials: "Matériaux réalistes",
    customizableStyles: "Styles personnalisables",
    highResolution: "Haute résolution",
    easyIntegration: "Intégration facile",
    variedTextures: "Textures variées",
    customColors: "Couleurs personnalisées",
    realisticLighting: "Éclairage réaliste",
    instantRendering: "Rendu instantané",
    harmoniousPalettes: "Palettes harmonieuses",
    cohesiveStyles: "Styles cohérents",
    multipleExports: "Export multiple",
    advancedCustomization: "Personnalisation avancée",
    virtualHomeStaging: "Home staging virtuel",
    photoEnhancement: "Amélioration photos",
    multipleStyles: "Styles multiples",
    immediateROI: "ROI immédiat",
    realisticPlacement: "Placement réaliste",
    adaptiveLighting: "Éclairage adaptatif",
    automaticContext: "Contexte automatique",
    ecommerceReady: "E-commerce ready",
    simpleIntegration: "Intégration Simple",
    startUsingAPIsWithCode: "Commencez à utiliser nos APIs en quelques lignes de code",
    apiExample: "Exemple d'API",
    generateAIFloorDesign: "Générer un design de sol IA",
    generatedDesignURL: "URL du design généré",
    whoItsBuiltFor: "Pour Qui C'est Conçu",
    designPlatforms: "Plateformes Design",
    integrateAIIntoDesignTools: "Intégrez l'IA dans vos outils de design existants",
    realEstate: "Immobilier",
    enhanceListingsWithVirtualStaging: "Améliorez vos listings avec le home staging virtuel",
    ecommerce: "E-commerce",
    visualizeProductsInRealEnvironments: "Visualisez vos produits dans des environnements réels",
    mobileApps: "Applications Mobiles",
    addAICapabilitiesToApps: "Ajoutez des fonctionnalités IA à vos apps",
    whyTeamsChooseStylyAPIs: "Pourquoi les Équipes Choisissent Styly APIs",
    cuttingEdgeAI: "IA de Pointe",
    aiModelsTrainedOnMillions: "Modèles d'IA entraînés sur millions d'images de design",
    fastDeployment: "Déploiement Rapide",
    integrationUnder30Minutes: "Intégration en moins de 30 minutes avec notre SDK",
    expertSupport: "Support Expert",
    dedicatedTeamForIntegration: "Équipe dédiée pour votre intégration et optimisation",
    whatYouCanBuildWithIt: "Ce Que Vous Pouvez Construire",
    interiorDesignPlatform: "Plateforme de Design Intérieur",
    createCompletePlatformWithGeneration: "Créez une plateforme complète avec génération automatique de designs, moodboards et visualisations 3D.",
    automaticDesignGeneration: "Génération automatique de designs",
    customMoodboards: "Moodboards personnalisés",
    realTime3DVisualization: "Visualisation 3D en temps réel",
    ecommerceApplication: "Application E-commerce",
    integrateProductsToIncreaseConversions: "Intégrez vos produits dans des environnements réalistes pour augmenter les conversions.",
    contextualProductVisualization: "Visualisation produit contextuelle",
    automaticRecommendations: "Recommandations automatiques",
    increasedConversions: "Augmentation des conversions",
    readyToGetStarted: "Prêt à Commencer ?",
    joinHundredsOfDevelopers: "Rejoignez des centaines de développeurs qui utilisent déjà nos APIs pour créer l'avenir du design.",
    requestAPIAccess: "Demander l'Accès API",
    bookTechnicalDemo: "Réserver une Démo Technique",
    fullName: "Nom complet",
    workEmail: "Email professionnel",
    company: "Entreprise",
    useCase: "Cas d'usage",
    selectYourUseCase: "Sélectionnez votre cas d'usage",
    designPlatform: "Plateforme de design",
    mobileApp: "Application mobile",
    other: "Autre",
    sendRequest: "Envoyer la Demande",
    yourName: "Votre nom",
    yourCompanyName: "Nom de votre entreprise",
    startFreeTrial: "Commencer l'essai gratuit",
    contactUs: "Contactez-nous",
    seeItForYourself: "Voyez par vous-même",
    culminationQuantitativeResearch: "L'aboutissement de la recherche quantitative",

    // Collaborators Page
    collaborators: "Collaborateurs",
    becomeCollaborator: "Donnez Vie à la Vision.",
    joinOurNetwork: "Aidez 20 000+ Créateurs à Transformer les Idées en Espaces.",
    collaboratorHeroDescription: "Chaque semaine, des milliers de concepts IA voient le jour sur Styly. Rejoignez les créatifs qui les rendent réels.",
    becomeDesignPartner: "Devenir Partenaire Design",
    freeAndQuick: "C'est gratuit et ne prend que 2 minutes.",

    // Problem Section
    theProblem: "Le Problème",
    problemDescription: "La plupart des professionnels du design perdent des heures à poursuivre des prospects froids.",
    deadEndDMs: "Messages privés sans suite et ghosting",
    deadEndDMsDescription: "Des clients potentiels qui ne donnent jamais suite, gaspillant votre temps et votre énergie précieux.",
    budgetlessCollectors: "\"Collectionneurs d'idées\" sans budget",
    budgetlessCollectorsDescription: "Des personnes qui ne font que naviguer sans véritable intention d'embaucher un professionnel.",
    endlessPitching: "Présentation sans fin pour de maigres résultats",
    endlessPitchingDescription: "Créer des propositions détaillées qui ne mènent nulle part, épuisant vos ressources.",
    stylyUsersReady: "Les utilisateurs Styly savent déjà ce qu'ils veulent",
    stylyUsersDescription: "Ils ont conçu leur espace. Ils sont prêts à commencer. Et ils ont besoin de quelqu'un en qui ils peuvent avoir confiance.",

    // Opportunity Section
    collaboratorsStylyAdvantage: "L'Avantage Styly",
    stylyAdvantageDescription: "Soyez mis en avant en tant que Partenaire Styly Vérifié et accédez à des clients pré-qualifiés.",
    getDiscoveredBy: "Soyez découvert par des clients qui :",
    haveAIDesigns: "Ont des aperçus de design générés par IA",
    haveAIDesignsDescription: "Évitez les devinettes — les clients connaissent déjà leur style",
    knowStyleSpace: "Connaissent leur style et leur espace",
    knowStyleSpaceDescription: "Ils ont déjà pris des décisions clés, vous faisant gagner du temps",
    activelyLooking: "Recherchent activement un professionnel",
    activelyLookingDescription: "Fini les curieux — seulement des clients sérieux",
    curatedMatchmaking: "mise en relation client personnalisée",
    notJustLeadGeneration: "Ce n'est pas seulement de la génération de prospects. C'est de la",

    // Benefits Section
    whatYoullGet: "Ce Que Vous Obtiendrez",
    highIntentClients: "Clients à forte intention",
    highIntentClientsDescription: "Pré-qualifiés par l'activité de design, prêts à avancer avec leurs projets.",
    aiEducatedHomeowners: "Accès aux propriétaires éduqués par l'IA",
    aiEducatedHomeownersDescription: "Connectez-vous avec des clients qui comprennent les concepts de design grâce à l'IA de Styly.",
    globalVisibility: "Visibilité mondiale",
    globalVisibilityDescription: "Soyez mis en avant sur Styly.io et Lovable.com pour atteindre plus de clients potentiels.",
    officialBadge: "Badge officiel \"Styly Certified\" Pro",
    officialBadgeDescription: "Différenciez-vous avec une reconnaissance officielle qui inspire confiance.",
    directContact: "Contact direct",
    directContactDescription: "Connectez-vous avec les clients par email ou chat sans interférence de plateforme.",
    noCommissions: "Aucune commission",
    noCommissionsDescription: "Aucun verrouillage de plateforme. Vous gardez 100% de vos contrats.",

    // Comparison Chart Section
    paymentBenefits: "Avantages",
    comparisonChart: "TABLEAU COMPARATIF",
    traditionalAgencies: "AGENCES TRADITIONNELLES",
    withoutAI: "(SANS IA)",
    vs: "VS",
    styly: "STYLY",
    leadCost: "COÛT PAR PROSPECT",
    monthlyLeadVolume: "VOLUME MENSUEL DE PROSPECTS",
    aiCompetency: "COMPÉTENCE IA",
    marketPosition: "POSITION MARCHÉ",
    serviceEvolution: "ÉVOLUTION DU SERVICE",
    designPreferenceUnderstanding: "COMPRÉHENSION DES PRÉFÉRENCES DE DESIGN",
    monthlyTraffic: "TRAFIC MENSUEL",
    globalReach: "PORTÉE MONDIALE",
    portfolioViewsOnline: "VUES PORTFOLIO EN LIGNE",
    clientBase: "BASE CLIENT",
    futureReadiness: "PRÉPARATION FUTURE",
    joinStylyTransform: "Rejoignez Styly aujourd'hui et transformez votre entreprise avec les avantages de l'IA",
    becomeCertifiedPro: "Devenir un Pro Certifié",

    // Premium Placement Section
    premiumPlacement: "Placement Premium = Clients Premium",
    stylyHighlightPros: "Styly mettra en avant les Pros Certifiés dans :",
    aiProjectExports: "Exports de projets IA avec recommandations professionnelles",
    stylyNewsletters: "Newsletters Styly et campagnes email vers des milliers d'utilisateurs",
    proPartnerDirectory: "L'Annuaire des Partenaires Pro sur Lovable.com",
    goToNameWhen: "Vous serez aussi la référence quand :",
    couplesDisagree: "Les couples ne sont pas d'accord sur les styles de rénovation et ont besoin d'une médiation professionnelle",
    realtorsWantStaging: "Les agents immobiliers veulent du home staging sans exploser les budgets",
    homeownersNeedProfessional: "Les propriétaires ont besoin d'un professionnel pour finaliser la vision qu'ils ont créée avec Styly",

    // Application CTA Section
    readyToBeRecommended: "Prêt à Être Recommandé par Styly ?",
    inviteOnlyExperience: "C'est une expérience sur invitation uniquement. Limité aux meilleurs professionnels par ville.",
    applyNow: "Postuler Maintenant",
    questionsReachUs: "Des questions ? Contactez-nous directement à",
    orDMUs: "ou envoyez-nous un DM",

    // Social Proof Section
    joinGrowingNetwork: "Rejoignez un Réseau Croissant de Designers Avant-gardistes",
    architectTokyo: "Architecte, Tokyo",
    interiorDesignerCapeTown: "Designer d'Intérieur, Le Cap",
    freelancerLisbon: "Freelance, Lisbonne",
    socialProofDescription: "Des studios boutiques aux créateurs solo — les partenaires Styly sont partout où les idées évoluent.",

    // Discovery Card Section
    yourOwnDiscoveryCard: "Votre Propre Carte de Découverte sur Styly",
    discoveryCardDescription: "Les utilisateurs explorant des idées peuvent vous trouver et se connecter avec vous grâce à votre profil dédié.",
    calmMinimalistSpaces: "Espaces minimalistes calmes avec du caractère",

    // Why Join Section
    whyJoinStyly: "Conçu pour les Créatifs Prêts à Faire un Travail Significatif",
    clientsWithVision: "Clients avec Vision",
    clientsWithVisionDescription: "Travaillez avec des personnes qui ont déjà imaginé quelque chose — et ont besoin de vous pour le concrétiser.",
    designOnYourTerms: "Design selon Vos Conditions",
    designOnYourTermsDescription: "Choisissez avec qui vous travaillez, comment vous collaborez, et d'où vous travaillez.",
    builtInExposure: "Exposition Intégrée",
    builtInExposureDescription: "Soyez vu par plus de 20K utilisateurs mensuels explorant des idées créatives.",
    realCreativityAI: "Vraie Créativité, Améliorée par l'IA",
    realCreativityAIDescription: "Partenariat avec des clients utilisant l'IA non pour vous remplacer — mais pour susciter de nouvelles conversations.",
    forStudiosAndSolo: "Pour Studios et Créateurs Solo",
    forStudiosAndSoloDescription: "Que vous soyez freelance ou service complet — Styly aide les gens à trouver votre voix unique.",
    // How It Works Section
    collaboratorsHowItWorks: "Comment Rejoindre en 3 Étapes Simples",
    stepOne: "Postuler",
    stepOneDescription: "Partagez votre nom, email, et un peu sur votre travail.",
    stepTwo: "Être Listé",
    stepTwoDescription: "Une fois approuvé, votre profil apparaît sur la page de découverte de Styly.",
    stepThree: "Commencer à Collaborer",
    stepThreeDescription: "Soyez contacté par des personnes inspirées par ce que vous faites.",

    // Who We're Looking For Section
    whoWereLookingFor: "Créatifs qui Pensent Spatialement et Rêvent Audacieusement",
    interiorDesigners: "Designers d'Intérieur",
    architects: "Architectes",
    conceptualCreatives: "Créatifs Conceptuels",
    spatialArtists: "Artistes Spatiaux",
    setDesigners: "Designers de Décors",
    anyoneExploringSpace: "Quiconque explore l'espace, la texture, la forme ou l'expérience",
    quoteBlock: "Si vous avez toujours voulu transformer le concept fou de quelqu'un en chef-d'œuvre du monde réel — c'est pour vous.",

    // Final CTA Section
    readyToJoin: "Prêt à Rejoindre ?",
    readyToJoinDescription: "Commencez à collaborer avec des créateurs visionnaires dès aujourd'hui.",
    collaboratorsApplyNow: "Postuler Maintenant",
    learnMore: "En Savoir Plus",
    getStarted: "Commencer",

    // Application Form
    applicationForm: "Formulaire de Candidature",
    quickApplication: "Candidature Rapide & Facile",
    applyToJoinNetwork: "Postuler pour Rejoindre Notre Réseau",
    fillOutForm: "Remplissez le formulaire ci-dessous pour commencer votre processus de candidature",
    quickFormDescription: "Rejoignez notre réseau exclusif en seulement 2 minutes. Seulement 4 champs requis.",
    collaboratorFullName: "Nom Complet",
    collaboratorFullNamePlaceholder: "Entrez votre nom complet",
    emailAddress: "Adresse Email",
    emailPlaceholder: "Entrez votre adresse email",
    location: "Localisation",
    locationPlaceholder: "Ville, Pays",
    portfolioLink: "Lien Portfolio",
    portfolioPlaceholder: "https://votre-portfolio.com",
    specialization: "Spécialisation",
    selectSpecialization: "Sélectionnez votre spécialisation",
    interiorDesign: "Design d'Intérieur",
    architecture: "Architecture",
    collaboratorOther: "Autre",
    submitApplication: "Soumettre la Candidature",
    submitting: "Envoi en cours...",
    collaboratorsClose: "Fermer",
    cancel: "Annuler",

    // Form Validation
    fieldRequired: "Ce champ est requis",
    invalidEmail: "Veuillez entrer une adresse email valide",
    invalidUrl: "Veuillez entrer une URL valide",

    // Form Success/Error States
    applicationSubmitted: "Candidature Soumise avec Succès !",
    applicationSuccess: "Merci pour votre candidature. Nous l'examinerons et vous recontacterons dans 2-3 jours ouvrables.",
    applicationError: "Quelque chose s'est mal passé. Veuillez réessayer plus tard.",
    tryAgain: "Réessayer",

  },
};

// Create a context for the current language
export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
