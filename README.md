This application has been deployed via Vercel. [Check it out here.](https://nikkipham-entrylevel.vercel.app/)

## Local setup

-   Clone repository.
-   `npm install` to install dependencies.
-   Rename `.env.local.example` file to `.env.local` and add `NEXT_PUBLIC_BASE_URL=http://localhost:3000`.
-   `npm run dev` to run the development server
-   Open `http://localhost:3000` in browser.

## Top 3 design choices/trade offs

### 1. Design choice: Using both server side and client side rendering

The page is pre-rendered at build time with `getStaticProps` and regenerated using Incremental Static Regeneration.

When the short title and status filters are selected, the `useEffect` hook is used to fetch the data again with the query string.

### 2. Design choice: Backend input sanitization

As there was no provided schema from the external API, I created some safeguards to sanitise inputs and error handling.

For example, `status` was set to only allow for `offering`, `running` or `finished` as inputs as described in the brief.

I initially made an assumption that `program` was always an array with one object. But I refactored my code to account for edge cases such as more than one object in the array or bad data. This is also accounted for in the frontend when the sessions are mapped.

### 3. Tradeoff: Tech stack choices

Due to time constraints, I decided to use JavaScript instead of TypeScript to ensure timely delivery of the completed product as I haven't learnt TypeScript yet.

I initially started the task using new App Router in Next.js but ran into some difficulties so switched to Page Routers as I was more familiar with it. Initial commits can be found [here](https://github.com/pik-nik/entrylevel-initial).

## Some alterations made from the brief

-   Changed status `OFFBOARDING` (returns nothing) to `FINISHED`.
-   Changed the design of the program cards compared to the sample and added year to the adjusted date of each program.

## Tech Stack

-   Next.js
-   JavaScript
-   Tailwind

## Dependencies

-   date-fns
