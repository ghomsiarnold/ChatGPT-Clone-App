// // // // Mettez votre propre clé API ici
// // // const OPENAI_API_KEY = "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";

// // // // Utilisez l'URL de GPT-3.5 Turbo, le dernier modèle de OpenAI [1]
// // // const OPENAI_ENDPOINT = "https://api.openai.com/v1/engines/gpt-3.5-turbo-preview/completions";

// // // // Définissez une fonction asynchrone pour envoyer un message à OpenAI
// // // export const sendMsgToOpenAI = async (input) => {
 
// // //     // Faites une requête POST avec les paramètres appropriés
// // //     const response = await fetch(OPENAI_ENDPOINT, {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //         'Authorization': `Bearer ${OPENAI_API_KEY}`
// // //       },
// // //       body: JSON.stringify({
// // //         prompt: input,
// // //         max_tokens: 50
// // //       })
// // //     });

// // //     // Vérifiez si la réponse est valide
// // //     if (!response.ok) {
// // //       throw new Error('La réponse du réseau n\'était pas valide');
// // //     }

// // //     // Convertissez la réponse en JSON et renvoyez le texte choisi
// // //     const data = await response.json();
// // //     return data.choices[0].text.trim();
// // // };
// // // const { Configuration, OpenAIApi } = require('openai');
// // // const configuration = new Configuration({ apikey: "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" });
// // // const openai = new OpenAIApi(configuration);

// // // export async function sendMsgToOpenAI(message) {
// // //     const res = await openai.createCompletion({
// // //         model: 'text-davinci-003',
// // //         prompt: message,
// // //         temperature: 0.7,
// // //         max_tokens: 256,
// // //         top_p: 1,
// // //         frequency_penalty: 0,
// // //         presense_penalty: 0
// // //     });

// // //     return res.data.choices[0].text;
// // // }
// // // Importez le module openai
// // const openai = require('openai');

// // // Mettez votre propre clé API ici
// // const OPENAI_API_KEY = "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";

// // // Utilisez l'URL de GPT-3.5 Turbo, le dernier modèle de OpenAI [1]
// // const OPENAI_ENDPOINT = "https://api.openai.com/v1/engines/gpt-3.5-turbo-preview/completions";

// // // Définissez une fonction asynchrone pour envoyer un message à OpenAI
// // export async function sendMsgToOpenAI(message) {
// //     // Créez une instance de OpenAIApi avec votre clé API
// //     const openai = new openai.OpenAIApi({ apikey: OPENAI_API_KEY });

// //     // Faites une requête POST avec les paramètres appropriés
// //     const res = await openai.createCompletion({
// //         model: OPENAI_ENDPOINT, // Spécifiez le modèle à utiliser
// //         prompt: message, // Spécifiez le message à envoyer
// //         temperature: 0.7, // Spécifiez le degré de créativité du modèle
// //         max_tokens: 256, // Spécifiez le nombre maximum de mots à générer
// //         top_p: 1, // Spécifiez la probabilité de choisir le mot le plus probable
// //         frequency_penalty: 0, // Spécifiez le degré de pénalisation des mots fréquents
// //         presence_penalty: 0 // Spécifiez le degré de pénalisation des mots déjà présents
// //     });

// //     // Vérifiez si la réponse est valide
// //     if (!res.ok) {
// //       throw new Error('La réponse du réseau n\'était pas valide');
// //     }

// //     // Renvoyez le texte choisi
// //     return res.data.choices[0].text;
// // }
// const openai = require('openai');

// // Mettez votre propre clé API ici
// const OPENAI_API_KEY = "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";

// // Définissez une fonction asynchrone pour envoyer un message à OpenAI
// export async function sendMsgToOpenAI(message) {
//     // Créez une instance de OpenAIApi avec votre clé API
//     const openaiInstance = new openai.OpenAIApi({ apikey: OPENAI_API_KEY });

//     // Faites une requête POST avec les paramètres appropriés
//     const res = await openaiInstance.createCompletion({
//         model: 'text-davinci-003', // Spécifiez le modèle à utiliser
//         prompt: message, // Spécifiez le message à envoyer
//         temperature: 0.7, // Spécifiez le degré de créativité du modèle
//         max_tokens: 256, // Spécifiez le nombre maximum de mots à générer
//         top_p: 1, // Spécifiez la probabilité de choisir le mot le plus probable
//         frequency_penalty: 0, // Spécifiez le degré de pénalisation des mots fréquents
//         presence_penalty: 0 // Spécifiez le degré de pénalisation des mots déjà présents
//     });

//     // Vérifiez si la réponse est valide
//     if (!res.ok) {
//       throw new Error('La réponse du réseau n\'était pas valide');
//     }

//     // Renvoyez le texte choisi
//     return res.data.choices[0].text;
// }
// import OpenAI from 'openai';

// const OPENAI_API_KEY = "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";

// export async function sendMsgToOpenAI(message) {
//     const openaiInstance = new OpenAI({ apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true });

//     const res = await openaiInstance.createCompletion({
//         engine: 'text-davinci-002',
//         prompt: message,
//         max_tokens: 100,
//     });

//     if (!res.data || !res.data.choices || !res.data.choices.length) {
//         throw new Error('Réponse du modèle non valide');
//     }

//     return res.data.choices[0].text;
// }
import OpenAI from 'openai';

const OPENAI_API_KEY = "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";

export async function sendMsgToOpenAI(message) {
    const openaiInstance = new OpenAI({ apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true });

    const res = await openaiInstance.complete({
        engine: 'text-davinci-002',
        prompt: message,
        max_tokens: 100,
    });

    if (!res.data || !res.data.choices || !res.data.choices.length) {
        throw new Error('Réponse du modèle non valide');
    }

    return res.data.choices[0].text;
}
