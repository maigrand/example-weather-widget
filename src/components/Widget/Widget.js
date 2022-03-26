import './Widget.css'

import bgUrl from './bg.jpg'

export default function Widget() {
    return (
        <div style={{
            backgroundColor: 'rgb(143,143,143)',
            backgroundImage: `url(${bgUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: '100vw',
            height: '100vh'
        }}>
            <div className="Widget">
                <div className="Widget-paper">

                    <div className="Widget-title Widget-text Widget-text_variant_title">
                        Воронеж
                    </div>

                    <div className="Widget-value Widget-text Widget-text_variant_value">
                        26<span className="Widget-text Widget-text_color_hint">°C</span>
                    </div>

                    <div className="Widget-value Widget-text Widget-text_variant_body2">
                        Облачно
                    </div>

                    <div className="Widget-items">
                        <div className="Widget-item">
                            <div className="Widget-itemText Widget-text Widget-text_variant_body1 Widget-text_color_secondary">20:00</div>
                            <img className="Widget-itemIcon Widget-icon Widget-icon_size_lg" src="https://yastatic.net/weather/i/icons/funky/dark/bkn_d.svg" alt="Облачно с прояснениями"/>
                            <div className="Widget-itemText Widget-text Widget-text_variant_body1">25°C</div>
                        </div>
                        <div className="Widget-item">
                            <div className="Widget-itemText Widget-text Widget-text_variant_body1 Widget-text_color_secondary">21:00</div>
                            <img className="Widget-itemIcon Widget-icon Widget-icon_size_lg" src="https://yastatic.net/weather/i/icons/funky/dark/bkn_d.svg" alt="Облачно с прояснениями"/>
                            <div className="Widget-itemText Widget-text Widget-text_variant_body1">23°C</div>
                        </div>
                        <div className="Widget-item">
                            <div className="Widget-itemText Widget-text Widget-text_variant_body1 Widget-text_color_secondary">22:00</div>
                            <img className="Widget-itemIcon Widget-icon Widget-icon_size_lg" src="https://yastatic.net/weather/i/icons/funky/dark/ovc.svg" alt="Пасмурно"/>
                            <div className="Widget-itemText Widget-text Widget-text_variant_body1">20°C</div>
                        </div>
                        <div className="Widget-item">
                            <div className="Widget-itemText Widget-text Widget-text_variant_body1 Widget-text_color_secondary">23:00</div>
                            <img className="Widget-itemIcon Widget-icon Widget-icon_size_lg" src="https://yastatic.net/weather/i/icons/funky/dark/bkn_ra_d.svg" alt="Дождь"/>
                            <div className="Widget-itemText Widget-text Widget-text_variant_body1">21°C</div>
                        </div>
                    </div>

                    <div className="Widget-table">

                        <div className="Widget-tableRow">
                            <div className="Widget-tableCell Widget-text Widget-text_variant_body2 Widget-text_color_secondary">
                                28.03
                            </div>
                            <div className="Widget-tableCell Widget-text Widget-text_variant_body2 Widget-text_color_secondary">
                                Пн
                            </div>
                            <div className="Widget-tableCell">
                                <img className="Widget-icon" src="https://yastatic.net/weather/i/icons/funky/dark/bkn_ra_d.svg" alt="Дождь"/>
                            </div>
                            <div className="Widget-tableCell Widget-text Widget-text_variant_body2">
                                21°C
                            </div>
                        </div>

                        <div className="Widget-tableRow">
                            <div className="Widget-tableCell Widget-text Widget-text_variant_body2 Widget-text_color_secondary">
                                29.03
                            </div>
                            <div className="Widget-tableCell Widget-text Widget-text_variant_body2 Widget-text_color_secondary">
                                Вт
                            </div>
                            <div className="Widget-tableCell">
                                <img className="Widget-icon" src="https://yastatic.net/weather/i/icons/funky/dark/bkn_ra_d.svg" alt="Дождь"/>
                            </div>
                            <div className="Widget-tableCell Widget-text Widget-text_variant_body2">
                                22°C
                            </div>
                        </div>

                        <div className="Widget-tableRow">
                            <div className="Widget-tableCell Widget-text Widget-text_variant_body2 Widget-text_color_secondary">
                                30.03
                            </div>
                            <div className="Widget-tableCell Widget-text Widget-text_variant_body2 Widget-text_color_secondary">
                                Ср
                            </div>
                            <div className="Widget-tableCell">
                                <img className="Widget-icon" src="https://yastatic.net/weather/i/icons/funky/dark/ovc.svg" alt="Пасмурно"/>
                            </div>
                            <div className="Widget-tableCell Widget-text Widget-text_variant_body2">
                                20°C
                            </div>
                        </div>

                        <div className="Widget-tableRow">
                            <div className="Widget-tableCell Widget-text Widget-text_variant_body2 Widget-text_color_secondary">
                                31.03
                            </div>
                            <div className="Widget-tableCell Widget-text Widget-text_variant_body2 Widget-text_color_secondary">
                                Чт
                            </div>
                            <div className="Widget-tableCell">
                                <img className="Widget-icon" src="https://yastatic.net/weather/i/icons/funky/dark/ovc.svg" alt="Пасмурно"/>
                            </div>
                            <div className="Widget-tableCell Widget-text Widget-text_variant_body2">
                                19°C
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
