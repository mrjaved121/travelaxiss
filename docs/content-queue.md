# Travelaxis content queue

The daily scheduled task ("Travelaxis – daily visit visa post") publishes the FIRST unticked item
below on each run, ticks it (`- [x]`), and adds the date and live URL. When every item is ticked,
the task goes back to choosing its own visit visa topics.

Rules for every item: at least 1,500 words of reader-facing text; the first paragraph gives the
direct answer; facts only from official sources opened in that run; no approval promises.

- Blog post → new entry in `components/data/blogContent.ts` + `components/data/blogIndex.ts`
- Page guide → new entry in `lib/data/visit-visa-guides.ts` under the given key (shown on that page)
- Post update → rewrite and expand the existing entry in `blogContent.ts` (keep the slug and the
  original `date`, set `dateModifiedIso` to today, update `title`/`metaTitle`/`metaDescription`)

To add, remove or reorder topics, edit this list. Edit the list only above the "Done" notes.

## Queue

- [ ] 1. Page guide `pillar` (/visit-visa/) — keyword: visit visa from Pakistan. Hub for every country: which visa each country uses, where to apply (official links), typical documents, bank statement basics, timelines, links to every country page and the main posts.
- [ ] 2. Blog post — keyword: UK visit visa cover letter sample Pakistan. Link to /visit-visa/uk/ and the existing post cover-letter-for-visit-visa-sample-pakistan.
- [ ] 3. Blog post — keyword: Germany tourist visa documents Pakistan. Link to /services/germany-visa-from-pakistan/ and /visit-visa/germany/.
- [ ] 4. Blog post — keyword: Schengen visa bank statement requirements Pakistan. Link to /visit-visa/schengen/.
- [ ] 5. Blog post — keyword: USA visa interview questions for Pakistanis. Link to /visit-visa/usa/.
- [ ] 6. Post update `how-much-bank-balance-uk-visit-visa-pakistan` — retarget to: UK visa bank statement requirements Pakistan. Expand to 1,500+ words.
- [ ] 7. Blog post — keyword: Schengen visa cover letter sample Pakistan. Link to /visit-visa/schengen/ and the general cover letter post.
- [ ] 8. Blog post — keyword: USA B1 B2 visa documents checklist Pakistan. Link to /visit-visa/usa/.
- [ ] 9. Blog post — keyword: UK family visit visa from Pakistan. Link to /visit-visa/uk/ and the existing UK sponsor letter post.
- [ ] 10. Page guide `france` (/visit-visa/france/) — keyword: France visit visa from Pakistan. Link to the existing France appointment (TLScontact) post.
- [ ] 11. Page guide `italy` (/visit-visa/italy/) — keyword: Italy tourist visa from Pakistan.
- [ ] 12. Blog post — keyword: UAE visit visa documents checklist. Checklist angle; must not repeat dubai-visit-visa-from-pakistan. Link to /visit-visa/uae/.
- [ ] 13. Page guide `spain` (/visit-visa/spain/) — keyword: Spain visit visa from Pakistan.
- [ ] 14. Blog post — keyword: DS-160 form guide Pakistan. Link to /visit-visa/usa/.
- [ ] 15. Page guide `netherlands` (/visit-visa/netherlands/) — keyword: Netherlands visit visa from Pakistan. Link to the existing Netherlands family visit post.
- [ ] 16. Page guide `uk` (/visit-visa/uk/) — keyword: UK visit visa requirements Pakistan. Hub for all UK posts.
- [ ] 17. Blog post — keyword: USA visa refusal reasons 214(b) Pakistan. Link to /visit-visa/usa/.
- [ ] 18. Page guide `australia` (/visit-visa/australia/) — keyword: Australia visitor visa subclass 600 from Pakistan. Must not repeat the existing post "Australia visit visa from Pakistan: documents required, fee and steps"; link to it.
- [ ] 19. Post update — refresh dubai-visit-visa-wife-kids-pakistan and dubai-visit-visa-for-parents-pakistan (keyword: Dubai family visit visa from Pakistan). Each 1,500+ words.
- [ ] 20. Blog post — keyword: Schengen travel insurance requirements Pakistan. Link to /visit-visa/schengen/.

## Done notes

<!-- The task adds one line per finished item: "N. YYYY-MM-DD – URL" or "N. skipped – reason". -->
