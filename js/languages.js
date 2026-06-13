// StudentStay Language Translations
// English (en) and French (fr)

const translations = {
    en: {
        // Navigation
        appName: "StudentStay",
        tagline: "Find Rooms. No Stress.",
        home: "Home",
        browse: "Browse",
        listRoom: "List a Room",
        dashboard: "Dashboard",
        admin: "Admin",
        login: "Login",
        logout: "Logout",
        darkLight: "Dark/Light",
        
        // Home Page
        heroTitle: "Find Student Rooms.",
        heroTitleGreen: "No Stress.",
        heroSubtitle: "Browse verified rooms across Cameroon. Connect with landlords directly on WhatsApp.",
        browseRooms: "Browse Rooms →",
        listRoomBtn: "List a Room",
        latestRooms: "Latest Rooms",
        latestSubtitle: "Recently posted by verified landlords from all university cities",
        
        // Footer
        footerTagline: "Find Rooms. No Stress.",
        footerLocation: "All major university cities across Cameroon",
        
        // Room Card
        perMonth: "/mo",
        perYear: "/year",
        schoolYear: "School Year",
        yearlyOption: "✨ Yearly option available",
        fromUni: "km from Uni",
        viewDetails: "View Details →",
        
        // Details Page
        verified: "✅ Verified",
        description: "Description",
        contactWhatsApp: "📲 Contact Landlord on WhatsApp",
        backToListings: "← Back to listings",
        editRoom: "✏️ Edit Room",
        monthlyPrice: "per month",
        yearlyPrice: "per school year",
        yearlyNote: "💡 Most students prefer yearly payment",
        bothMonthly: "per month",
        bothYearly: "per school year",
        bothSavings: "Pay yearly and save money!",
        saveAmount: "Save",
        
        // Listing Page
        browseTitle: "Browse Rooms",
        cityLabel: "City / Town",
        pricingTypeLabel: "Pricing Type",
        minPriceLabel: "Min Price (FCFA)",
        maxPriceLabel: "Max Price (FCFA)",
        applyFilters: "Apply Filters",
        resetFilters: "Reset all filters",
        allCities: "All Cities",
        allPricing: "All",
        monthly: "Monthly",
        yearly: "Yearly (School Year)",
        both: "Both Options",
        noRoomsFound: "No rooms found",
        roomsFound: "rooms found",
        roomFound: "room found",
        loading: "Loading...",
        errorLoading: "Error loading rooms",
        noCitiesFound: "No cities found. Type a valid city.",
        noActiveFilters: "No active filters",
        minPricePlaceholder: "e.g., 50000",
        maxPricePlaceholder: "e.g., 200000",
        
        // Post/Edit Room Page
        postRoomTitle: "Post a Room",
        editRoomTitle: "Edit Room",
        formSubtitle: "Fill out the form. Admin will review before publishing.",
        titleLabel: "Title *",
        pricingTypeLabel2: "Pricing Type *",
        monthlyOption: "Monthly (per month)",
        yearlyOption2: "Yearly (per school year)",
        bothOption: "Both (monthly & yearly)",
        monthlyPriceLabel: "Price (FCFA/month) *",
        monthlyHint: "For monthly payment option",
        yearlyPriceLabel: "Price (FCFA/school year) *",
        yearlyHint: "Most students pay per school year (9-10 months)",
        cityLabel2: "City / Town *",
        searchCity: "Search or select city...",
        areaLabel: "Neighborhood/Area (optional)",
        distanceLabel: "Distance (km from University) *",
        descriptionLabel: "Description *",
        featuresLabel: "Features (comma separated)",
        featuresHint: "Water, Electricity, Furnished, WiFi",
        whatsappLabel: "WhatsApp Number *",
        whatsappHint: "670922913",
        imagesLabel: "Upload Images (max 5)",
        imagesHint: "Select up to 5 images (JPG, PNG). Uploaded to ImgBB (free).",
        submitListing: "Submit Listing",
        saveChanges: "Save Changes",
        deleteRoom: "Delete Room",
        uploading: "Uploading...",
        uploadingImages: "📤 Uploading images...",
        successPosted: "✅ Room posted! Redirecting...",
        successUpdated: "✅ Room updated! Redirecting...",
        errorOccurred: "Error: ",
        currentImages: "Current Images",
        addNewImages: "Add New Images (max 10 total)",
        noImages: "No images. Add some below.",
        uploadFailed: "Upload failed",
        onlyLandlords: "Only approved landlords can post rooms.",
        selectCity: "Please select a city",
        maxImages: "Max 5 images",
        
        // Admin Page
        adminDashboard: "StudentStay Admin",
        pendingRooms: "Pending Rooms",
        applications: "Applications",
        totalRooms: "Total Rooms",
        pendingRoomsTab: "Pending Rooms",
        landlordApplications: "Landlord Applications",
        title: "Title",
        pricing: "Pricing",
        city: "City",
        listedBy: "Listed By",
        actions: "Actions",
        edit: "Edit",
        approve: "Approve",
        delete: "Delete",
        name: "Name",
        email: "Email",
        whatsapp: "WhatsApp",
        requestedRole: "Requested Role",
        date: "Date",
        noPendingRooms: "No pending rooms",
        noPendingApps: "No pending applications",
        perMonthBadge: "per month",
        perYearBadge: "per year",
        bothBadge: "both",
        
        // Dashboard Page
        welcome: "Welcome",
        role: "Role",
        wantToListRooms: "Want to list rooms?",
        requestLandlord: "Request to become Landlord",
        pendingApproval: "⏳ Pending Approval",
        pendingApprovalText: "Your landlord application is being reviewed.",
        verifiedLandlord: "✅ Verified Landlord",
        freeListings: "You have",
        freeListingsRemaining: "free listings remaining.",
        postNewRoom: "+ Post New Room",
        myRooms: "My Rooms",
        noRoomsYet: "No rooms posted yet.",
        
        // Login/Signup Page
        loginTitle: "Login",
        signupTitle: "Sign Up",
        emailLabel: "Email",
        passwordLabel: "Password",
        fullNameLabel: "Full Name",
        phoneLabel: "WhatsApp (e.g., 670922913)",
        createAccount: "Create Account",
        loginSuccess: "Login successful! Redirecting...",
        accountCreated: "Account created! Redirecting...",
        invalidPhone: "Please enter a valid Cameroon phone number (9 digits, starts with 2, 3, or 6)",
        
        // Modal
        modalWelcome: "Welcome to StudentStay",
        modalSubtitle: "Bienvenue sur StudentStay",
        modalEnglish: "English",
        modalEnglishSub: "Continue in English",
        modalFrench: "Français",
        modalFrenchSub: "Continuer en français",
        
        // PWA Install
        installApp: "📲 Install App",
        
        // Common
        save: "Save",
        cancel: "Cancel",
        confirm: "Confirm",
        back: "Back",
        next: "Next",
        submit: "Submit",
        loadingText: "Loading...",
        noData: "No data found"
    },
    
    fr: {
        // Navigation
        appName: "StudentStay",
        tagline: "Trouvez des Chambres. Sans Stress.",
        home: "Accueil",
        browse: "Parcourir",
        listRoom: "Publier une Chambre",
        dashboard: "Tableau de bord",
        admin: "Admin",
        login: "Connexion",
        logout: "Déconnexion",
        darkLight: "Sombre/Clair",
        
        // Home Page
        heroTitle: "Trouvez des Chambres Étudiantes.",
        heroTitleGreen: "Sans Stress.",
        heroSubtitle: "Parcourez les chambres vérifiées dans tout le Cameroun. Contactez les propriétaires directement sur WhatsApp.",
        browseRooms: "Parcourir les Chambres →",
        listRoomBtn: "Publier une Chambre",
        latestRooms: "Dernières Chambres",
        latestSubtitle: "Récemment publiées par des propriétaires vérifiés de toutes les villes universitaires",
        
        // Footer
        footerTagline: "Trouvez des Chambres. Sans Stress.",
        footerLocation: "Toutes les grandes villes universitaires du Cameroun",
        
        // Room Card
        perMonth: "/mois",
        perYear: "/an",
        schoolYear: "Année scolaire",
        yearlyOption: "✨ Option annuelle disponible",
        fromUni: "km de l'Univ",
        viewDetails: "Voir les détails →",
        
        // Details Page
        verified: "✅ Vérifié",
        description: "Description",
        contactWhatsApp: "📲 Contacter le propriétaire sur WhatsApp",
        backToListings: "← Retour aux annonces",
        editRoom: "✏️ Modifier la chambre",
        monthlyPrice: "par mois",
        yearlyPrice: "par année scolaire",
        yearlyNote: "💡 La plupart des étudiants préfèrent le paiement annuel",
        bothMonthly: "par mois",
        bothYearly: "par année scolaire",
        bothSavings: "Payez à l'année et économisez de l'argent !",
        saveAmount: "Économisez",
        
        // Listing Page
        browseTitle: "Parcourir les Chambres",
        cityLabel: "Ville / Quartier",
        pricingTypeLabel: "Type de Tarif",
        minPriceLabel: "Prix min (FCFA)",
        maxPriceLabel: "Prix max (FCFA)",
        applyFilters: "Appliquer les filtres",
        resetFilters: "Réinitialiser les filtres",
        allCities: "Toutes les villes",
        allPricing: "Tous",
        monthly: "Mensuel",
        yearly: "Annuel (Année scolaire)",
        both: "Les deux options",
        noRoomsFound: "Aucune chambre trouvée",
        roomsFound: "chambres trouvées",
        roomFound: "chambre trouvée",
        loading: "Chargement...",
        errorLoading: "Erreur de chargement des chambres",
        noCitiesFound: "Aucune ville trouvée. Saisissez une ville valide.",
        noActiveFilters: "Aucun filtre actif",
        minPricePlaceholder: "ex: 50000",
        maxPricePlaceholder: "ex: 200000",
        
        // Post/Edit Room Page
        postRoomTitle: "Publier une Chambre",
        editRoomTitle: "Modifier la Chambre",
        formSubtitle: "Remplissez le formulaire. L'administrateur examinera avant publication.",
        titleLabel: "Titre *",
        pricingTypeLabel2: "Type de Tarif *",
        monthlyOption: "Mensuel (par mois)",
        yearlyOption2: "Annuel (par année scolaire)",
        bothOption: "Les deux (mensuel et annuel)",
        monthlyPriceLabel: "Prix (FCFA/mois) *",
        monthlyHint: "Pour option de paiement mensuel",
        yearlyPriceLabel: "Prix (FCFA/année scolaire) *",
        yearlyHint: "La plupart des étudiants paient par année scolaire (9-10 mois)",
        cityLabel2: "Ville / Quartier *",
        searchCity: "Rechercher ou sélectionner une ville...",
        areaLabel: "Quartier (optionnel)",
        distanceLabel: "Distance (km de l'Université) *",
        descriptionLabel: "Description *",
        featuresLabel: "Caractéristiques (séparées par des virgules)",
        featuresHint: "Eau, Électricité, Meublé, WiFi",
        whatsappLabel: "Numéro WhatsApp *",
        whatsappHint: "670922913",
        imagesLabel: "Télécharger des images (max 5)",
        imagesHint: "Sélectionnez jusqu'à 5 images (JPG, PNG). Téléchargement sur ImgBB (gratuit).",
        submitListing: "Soumettre l'annonce",
        saveChanges: "Enregistrer les modifications",
        deleteRoom: "Supprimer la chambre",
        uploading: "Téléchargement...",
        uploadingImages: "📤 Téléchargement des images...",
        successPosted: "✅ Chambre publiée ! Redirection...",
        successUpdated: "✅ Chambre mise à jour ! Redirection...",
        errorOccurred: "Erreur : ",
        currentImages: "Images actuelles",
        addNewImages: "Ajouter de nouvelles images (10 max total)",
        noImages: "Aucune image. Ajoutez-en ci-dessous.",
        uploadFailed: "Échec du téléchargement",
        onlyLandlords: "Seuls les propriétaires approuvés peuvent publier des chambres.",
        selectCity: "Veuillez sélectionner une ville",
        maxImages: "5 images maximum",
        
        // Admin Page
        adminDashboard: "StudentStay Admin",
        pendingRooms: "Chambres en attente",
        applications: "Demandes",
        totalRooms: "Total des chambres",
        pendingRoomsTab: "Chambres en attente",
        landlordApplications: "Demandes de propriétaires",
        title: "Titre",
        pricing: "Tarif",
        city: "Ville",
        listedBy: "Publié par",
        actions: "Actions",
        edit: "Modifier",
        approve: "Approuver",
        delete: "Supprimer",
        name: "Nom",
        email: "Email",
        whatsapp: "WhatsApp",
        requestedRole: "Rôle demandé",
        date: "Date",
        noPendingRooms: "Aucune chambre en attente",
        noPendingApps: "Aucune demande en attente",
        perMonthBadge: "par mois",
        perYearBadge: "par an",
        bothBadge: "les deux",
        
        // Dashboard Page
        welcome: "Bienvenue",
        role: "Rôle",
        wantToListRooms: "Vous souhaitez publier des chambres ?",
        requestLandlord: "Demander à devenir propriétaire",
        pendingApproval: "⏳ Approbation en attente",
        pendingApprovalText: "Votre demande de propriétaire est en cours d'examen.",
        verifiedLandlord: "✅ Propriétaire vérifié",
        freeListings: "Vous avez",
        freeListingsRemaining: "annonces gratuites restantes.",
        postNewRoom: "+ Publier une nouvelle chambre",
        myRooms: "Mes chambres",
        noRoomsYet: "Aucune chambre publiée pour le moment.",
        
        // Login/Signup Page
        loginTitle: "Connexion",
        signupTitle: "Inscription",
        emailLabel: "Email",
        passwordLabel: "Mot de passe",
        fullNameLabel: "Nom complet",
        phoneLabel: "WhatsApp (ex: 670922913)",
        createAccount: "Créer un compte",
        loginSuccess: "Connexion réussie ! Redirection...",
        accountCreated: "Compte créé ! Redirection...",
        invalidPhone: "Veuillez entrer un numéro de téléphone camerounais valide (9 chiffres, commence par 2, 3 ou 6)",
        
        // Modal
        modalWelcome: "Bienvenue sur StudentStay",
        modalSubtitle: "Welcome to StudentStay",
        modalEnglish: "English",
        modalEnglishSub: "Continue in English",
        modalFrench: "Français",
        modalFrenchSub: "Continuer en français",
        
        // PWA Install
        installApp: "📲 Installer l'application",
        
        // Common
        save: "Enregistrer",
        cancel: "Annuler",
        confirm: "Confirmer",
        back: "Retour",
        next: "Suivant",
        submit: "Soumettre",
        loadingText: "Chargement...",
        noData: "Aucune donnée trouvée"
    }
};

// Current language - default to null (not set, shows modal)
let currentLanguage = localStorage.getItem('language') || null;

// Function to get translation
function t(key) {
    if (!currentLanguage) return translations['en'][key] || key;
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

// Function to set language and close modal
function selectLanguage(lang) {
    if (lang !== 'en' && lang !== 'fr') return;
    
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Hide modal
    const modal = document.getElementById('languageModal');
    if (modal) {
        modal.classList.add('hidden-modal');
    }
    
    // Update page language
    updatePageLanguage();
    
    // Reload dynamic content
    if (typeof loadRooms === 'function') loadRooms();
    if (typeof loadDashboardData === 'function') loadDashboardData();
    if (typeof displayRooms === 'function') displayRooms();
    if (typeof applyFilters === 'function') applyFilters();
    if (typeof loadRoomData === 'function') loadRoomData();
    
    // Update language button if it exists
    updateLanguageButtonText();
}

// Function to set language (for nav button usage)
function setLanguage(lang) {
    selectLanguage(lang);
}

// Function to toggle language (for nav button)
function toggleLanguage() {
    const newLang = currentLanguage === 'en' ? 'fr' : 'en';
    selectLanguage(newLang);
}

// Function to update all translatable elements on the page
function updatePageLanguage() {
    if (!currentLanguage) return; // Wait for language selection
    
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.placeholder !== undefined) {
                element.placeholder = t(key);
            }
        } else {
            element.textContent = t(key);
        }
    });
    
    // Update elements with data-i18n-html attribute
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        element.innerHTML = t(key);
    });
    
    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });
    
    // Update title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        element.title = t(key);
    });
    
    // Dispatch custom event for dynamic content updates
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: currentLanguage } }));
}

// Function to update language toggle button text
function updateLanguageButtonText() {
    const langToggle = document.getElementById('languageToggle');
    const mobileLangToggle = document.getElementById('mobileLanguageToggle');
    const isFrench = currentLanguage === 'fr';
    
    if (langToggle) langToggle.innerHTML = isFrench ? '🇬🇧 EN' : '🇫🇷 FR';
    if (mobileLangToggle) mobileLangToggle.innerHTML = isFrench ? '🇬🇧 ENGLISH' : '🇫🇷 FRANÇAIS';
}

// Function to get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Check if language is already selected on page load
document.addEventListener('DOMContentLoaded', () => {
    // If language already selected, hide modal and update page
    if (currentLanguage) {
        const modal = document.getElementById('languageModal');
        if (modal) {
            modal.classList.add('hidden-modal');
        }
        updatePageLanguage();
    }
    updateLanguageButtonText();
});