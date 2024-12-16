document.addEventListener('DOMContentLoaded', (event) => {
    // Remplacez par votre URL de Supabase et votre clé publique
    const SUPABASE_URL = 'https://cfkjyratlllnduvamzwo.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNma2p5cmF0bGxsbmR1dmFtendvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNDE5MTI5OCwiZXhwIjoyMDQ5NzY3Mjk4fQ.eeJybzKeDj-HZ_HBNmf5b29ft7SjbkbOurX-XzR-f5k';
    
    // Initialiser Supabase
    const { createClient } = supabase;
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const form = document.getElementById('connexionForm');
    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire
        
        // Récupérer les valeurs des champs du formulaire
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Vérifier si l'utilisateur est admin
        if (username === 'webmaster' && password === 'NSInsi') {
            window.location.href = "./Admin/admin.html";
            return;
        }
        
        // Vérifier les informations d'identification dans Supabase
        const { data, error } = await supabaseClient
            .from('users')
            .select('*')
            .eq('username', username)
            .eq('password', password);

        if (error) {
            console.error('Error:', error);
            alert('Erreur lors de la connexion.');
        } else if (data.length > 0) {
            // Rediriger vers une autre page si les informations d'identification sont correctes
            window.location.href = '/Connexion/Redirection/redierction.html';
        } else {
            alert('Nom d\'utilisateur ou mot de passe incorrect.');
        }
    });
});