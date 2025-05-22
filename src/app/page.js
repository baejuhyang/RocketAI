import Ch1Dialog from '@/components/Ch1Dialog';
import { TableTitle } from '@/components/TableTitle';

export default function Home() {
    return (
        <main className="ch1">
            <div>
                <img src="/images/ch1-bg.png" alt="제1장"></img>
                <Ch1Dialog />
                <figure>
                    <img src="/images/table.png" alt="표" />
                    <div className="contents">
                        <TableTitle />
                    </div>
                </figure>
            </div>
        </main>
    );
}
