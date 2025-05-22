import '../styles/globals.scss';

export const metadata = {
    title: '로켓AI',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
