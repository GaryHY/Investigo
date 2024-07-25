# 123soleil-garyDesktop app Investigo

<!-- TODO:  -->
- [ ] Create a system design or use a UI lib like shadcn
- [ ] Finish the mock up on figma so I know what to design
- [ ] Make the frontend part of the app
- [ ] Do the backend part in rust for the simple queries related to the sqlite database and the photos 
- [ ] Do the machine learning part for the LLM, the photo captions and the audio processing.
- [ ] Ajouter dans le header des boutons qui manquent comme notification et update
- [ ] Create an event to call a function on the backend with rust that run the machine learning model to find what should be sent as a suggestion while typing

### Question que je dois poser a papa
- Une affaire peut elle avoir plusieurs clients ?

## Frontend


## Backend
### Structure of the backend
### What types do I need ?

for the Date type I found (https://docs.rs/time/latest/time/struct.Date.html)

### Pour les ID de factures/devis etc.., ce sont des choses sequentielles donc, il me faudra recuperer la quantite de facture qui a deja ete emis pour commencer  mon compte de facture.
Ou bien je repars de 0 et je refais toute la compta.

### Ressources for the project notamment pour tout ce qui a a voir avec tauri (example de projets entre autre)
- [Article](https://dev.to/dubisdev/creating-your-first-tauri-app-with-react-a-beginners-guide-3eb2) on dev.to 
- Second [article](https://dev.to/maxtaylor/create-a-full-stack-rust-desktop-app-with-tauri-yew-and-tailwind-css-2962) on dev.to
- Collection of tauri [projects](https://github.com/tauri-apps/awesome-tauri?tab=readme-ov-file) to get example from


## Pour la machine learning, ce que je dois pouvoir faire :
1. Lancer un programme depuis mon backend en rust et recuperer les resultats pour le front.
