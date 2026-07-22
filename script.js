function copyEmail() {
    const email = "soubhagyashree0@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const toast = document.getElementById('toast');
        toast.style.display = 'block';
        setTimeout(() => { toast.style.display = 'none'; }, 3000);
    });
}

const queries = {
    1: {
        genai: '"Under Section 115 CPC, High Courts can revise orders if lower courts failed to exercise jurisdiction. The court generally held that revision is acceptable when jurisdictional errors cause injustice..."',
        retrieval: '<strong>[Para 14 | SC 2025]:</strong> "The revisionary power under Section 115 CPC is strictly confined to jurisdictional error and cannot be exercised to re-appreciate evidence on merits..."'
    },
    2: {
        genai: '"Section 6(4) of the DPDP Act 2023 mandates that companies must delete personal data when consent is withdrawn. Usually, deletion happens immediately unless other laws require keeping it..."',
        retrieval: '<strong>[Sec 6(4) vs PMLA Conflict]:</strong> "Request for erasure DECLINED under Decision Tree Node 3B. Preserved with pseudonymization due to mandatory 5-year retention rule under Section 12 PMLA, 2002."'
    }
};

function loadDemoQuery(id) {
    document.querySelectorAll('.query-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('genai-text').innerText = queries[id].genai;
    document.getElementById('retrieval-text').innerHTML = queries[id].retrieval;
}
