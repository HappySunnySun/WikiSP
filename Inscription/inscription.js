document.addEventListener('DOMContentLoaded', (event) => { 
    const SUPABASE_URL = 'https://fmydcetotqhelfjbxsqs.supabase.co'; 
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZteWRjZXRvdHFoZWxmamJ4c3FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NDY0NTMsImV4cCI6MjA2MzMyMjQ1M30.Pr4o4wCKuZKMlEofJ2WiLE1FLwvC7WczHc9pM8NyIiQ';
    
    // Initialiser Supabase
    const { createClient } = supabase;
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const form = document.getElementById('inscriptionForm');
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        // Récupérer les valeurs des champs du formulaire
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Envoyer les données à Supabase
        const { data, error } = await supabaseClient
            .from('users')
            .insert([
                { username: username, password: password }
            ]);

        if (error) {
            console.error('Error:', error); // Afficher l'erreur dans la console
        } else {
            console.log('User inserted:', data); // Afficher les données insérées dans la console
            alert('Inscription réussie ! Vos informations ont bien été enregistrées.'); // Afficher une alerte pour confirmer l'inscription
        }
    });
});
