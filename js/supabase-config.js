// js/supabase-config.js
// Get these two values from: Supabase Dashboard → Settings → API
// SUPABASE_URL      = "Project URL"
// SUPABASE_ANON_KEY = "anon public" key (safe to expose in frontend code —
//                      it only works within the limits of your RLS policies)

const SUPABASE_URL = "https://mbjplutwsxtmdmmwdoxs.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ianBsdXR3c3h0bWRtbXdkb3hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYzOTg2NDQsImV4cCI6MjEwMTk3NDY0NH0.KFpy5AgQ3j57tH8-HNn8jlCpoWzaZ6hHUZ0RIHr4wSQ";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Keeps a live reference to the logged-in user, updated automatically.
// Old code used firebase.auth().currentUser synchronously — Supabase's
// equivalent is async, so we cache it here and every page listens for changes.
let currentUser = null;

sb.auth.onAuthStateChange((_event, session) => {
  currentUser = session?.user ?? null;
});

// Populate it immediately on page load too (onAuthStateChange only fires on
// the *next* change unless we also check the current session up front).
sb.auth.getSession().then(({ data }) => {
  currentUser = data.session?.user ?? null;
});
