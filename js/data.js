// ============================================
// WaterGuard - Data Module
// Contains all governorate data, users, stations, and demo data
// ============================================

const WaterGuardData = (function() {
    'use strict';

    // Governorates data with official colors and credentials
    const governorates = [
        { id: 'cairo', name: 'القاهرة', password: 'CAIRO2026!', color: '#1E3A8A', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Cairo_Governorate.png/320px-Flag_of_Cairo_Governorate.png', region: 'الوجه البحري' },
        { id: 'giza', name: 'الجيزة', password: 'GIZA2026!', color: '#047857', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Giza_Governorate.png/320px-Flag_of_Giza_Governorate.png', region: 'الوجه البحري' },
        { id: 'alexandria', name: 'الإسكندرية', password: 'ALEX2026!', color: '#0369A1', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Flag_of_Alexandria.png/320px-Flag_of_Alexandria.png', region: 'الوجه البحري' },
        { id: 'dakahlia', name: 'الدقهلية', password: 'DAKA2026!', color: '#15803D', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Flag_Egy_Dakahleya.gif/320px-Flag_Egy_Dakahleya.gif', region: 'الوجه البحري' },
        { id: 'sharkia', name: 'الشرقية', password: 'SHAR2026!', color: '#166534', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_Of_Sharkia_Governorate.png/320px-Flag_Of_Sharkia_Governorate.png', region: 'الوجه البحري' },
        { id: 'gharbia', name: 'الغربية', password: 'GHAR2026!', color: '#1D4ED8', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Gharbia_Governorate.png/320px-Flag_of_Gharbia_Governorate.png', region: 'الوجه البحري' },
        { id: 'qalubia', name: 'القليوبية', password: 'QALU2026!', color: '#15803D', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Qalubiya_Governorate.png/320px-Flag_of_Qalubiya_Governorate.png', region: 'الوجه البحري' },
        { id: 'menoufia', name: 'المنوفية', password: 'MONU2026!', color: '#166534', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Menoufia_Governorate.PNG/320px-Flag_of_Menoufia_Governorate.PNG', region: 'الوجه البحري' },
        { id: 'kafr_sheikh', name: 'كفر الشيخ', password: 'KAFR2026!', color: '#0891B2', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_Kafr_El-Sheikh_Governorate-official.png/320px-Flag_of_Kafr_El-Sheikh_Governorate-official.png', region: 'الوجه البحري' },
        { id: 'beheira', name: 'البحيرة', password: 'BEHE2026!', color: '#1D4ED8', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Behira_Govenorate.JPG/320px-Flag_of_Behira_Govenorate.JPG', region: 'الوجه البحري' },
        { id: 'damietta', name: 'دمياط', password: 'DAMI2026!', color: '#0369A1', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Governadorat_de_Damietta.png/320px-Governadorat_de_Damietta.png', region: 'الوجه البحري' },
        { id: 'port_said', name: 'بورسعيد', password: 'PORT2026!', color: '#B91C1C', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Flag_of_Port_Said_Governorate.PNG/320px-Flag_of_Port_Said_Governorate.PNG', region: 'قناة السويس' },
        { id: 'ismailia', name: 'الإسماعيلية', password: 'ISMA2026!', color: '#15803D', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Governadorat_d%27Ismailiya.png/320px-Governadorat_d%27Ismailiya.png', region: 'قناة السويس' },
        { id: 'suez', name: 'السويس', password: 'SUEZ2026!', color: '#0369A1', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_the_governorate_of_suez.png/320px-Flag_of_the_governorate_of_suez.png', region: 'قناة السويس' },
        { id: 'north_sinai', name: 'شمال سيناء', password: 'NSIN2026!', color: '#CA8A04', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Governadorat_de_Sinai-Sinai_del_nord.png/320px-Governadorat_de_Sinai-Sinai_del_nord.png', region: 'سيناء' },
        { id: 'south_sinai', name: 'جنوب سيناء', password: 'SSIN2026!', color: '#0891B2', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_South_Sinai_Governorate.png/320px-Flag_of_South_Sinai_Governorate.png', region: 'سيناء' },
        { id: 'matrouh', name: 'مطروح', password: 'MATR2026!', color: '#0369A1', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_Of_The_Matrouh_Governorate_%28High_resolution%29.png/320px-Flag_Of_The_Matrouh_Governorate_%28High_resolution%29.png', region: 'الحدود الغربية' },
        { id: 'red_sea', name: 'البحر الأحمر', password: 'REDS2026!', color: '#B91C1C', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Red_sea_governorate_flag.png/320px-Red_sea_governorate_flag.png', region: 'البحر الأحمر' },
        { id: 'new_valley', name: 'الوادي الجديد', password: 'NEWV2026!', color: '#78716C', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_New_Valley_Governorate.png/320px-Flag_of_New_Valley_Governorate.png', region: 'الصحراء الغربية' },
        { id: 'faiyum', name: 'الفيوم', password: 'FAIY2026!', color: '#15803D', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Governadorat_de_Faium.png/320px-Governadorat_de_Faium.png', region: 'الوجه القبلي' },
        { id: 'beni_suef', name: 'بني سويف', password: 'BENI2026!', color: '#CA8A04', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Governadorat_de_Bani_Suwayf.png/320px-Governadorat_de_Bani_Suwayf.png', region: 'الوجه القبلي' },
        { id: 'minya', name: 'المنيا', password: 'MINY2026!', color: '#15803D', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Minya_Governorate.jpg/320px-Flag_of_Minya_Governorate.jpg', region: 'الوجه القبلي' },
        { id: 'asyut', name: 'أسيوط', password: 'ASYU2026!', color: '#0369A1', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Flag_of_Asyut_Governorate.png/320px-Flag_of_Asyut_Governorate.png', region: 'الوجه القبلي' },
        { id: 'sohag', name: 'سوهاج', password: 'SOHA2026!', color: '#CA8A04', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_Egy_Sawhaj.gif/320px-Flag_Egy_Sawhaj.gif', region: 'الوجه القبلي' },
        { id: 'qena', name: 'قنا', password: 'QENA2026!', color: '#1E40AF', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Flag_of_Qena_Governorate.png/320px-Flag_of_Qena_Governorate.png', region: 'الوجه القبلي' },
        { id: 'luxor', name: 'الأقصر', password: 'LUXO2026!', color: '#B45309', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Eg_luxor.png/320px-Eg_luxor.png', region: 'الوجه القبلي' },
        { id: 'aswan', name: 'أسوان', password: 'ASWA2026!', color: '#0891B2', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Flag_of_Aswan_Governorate.png/320px-Flag_of_Aswan_Governorate.png', region: 'الوجه القبلي' }
    ];

    // Admin users
    const adminUsers = [
        { username: 'admin', password: 'admin2026', role: 'admin', name: 'مدير النظام', governorateId: null },
        { username: 'general', password: 'general2026', role: 'general', name: 'المراقب العام', governorateId: null }
    ];

    // Generate governorate monitor users
    const monitorUsers = governorates.map(gov => ({
        username: gov.id,
        password: gov.password,
        role: 'governorate',
        name: `مراقب ${gov.name}`,
        governorateId: gov.id
    }));

    // All users combined
    const allUsers = [...adminUsers, ...monitorUsers];

    // Generate demo water stations
    function generateStations() {
        const stations = [];
        const stationTypes = ['محطة رئيسية', 'محطة فرعية', 'محطة متنقلة', 'محطة تصفية'];
        const statuses = ['active', 'active', 'active', 'warning', 'active', 'danger', 'active'];

        governorates.forEach(gov => {
            const count = Math.floor(Math.random() * 4) + 2; // 2-5 stations per governorate
            for (let i = 1; i <= count; i++) {
                const status = statuses[Math.floor(Math.random() * statuses.length)];
                stations.push({
                    id: `${gov.id}_st${i}`,
                    name: `محطة ${gov.name} ${stationTypes[i % stationTypes.length]} ${String.fromCharCode(65 + i - 1)}`,
                    governorateId: gov.id,
                    governorateName: gov.name,
                    type: stationTypes[i % stationTypes.length],
                    status: status,
                    location: `منطقة ${String.fromCharCode(65 + i - 1)} - ${gov.name}`,
                    capacity: Math.floor(Math.random() * 50000) + 10000,
                    lastUpdate: new Date(Date.now() - Math.floor(Math.random() * 3600000)).toISOString(),
                    sensors: {
                        tds: Math.random() * 500 + 100,
                        ph: Math.random() * 3 + 6,
                        turbidity: Math.random() * 10,
                        conductivity: Math.random() * 1000 + 200,
                        temperature: Math.random() * 15 + 15,
                        chlorine: Math.random() * 2 + 0.5
                    }
                });
            }
        });
        return stations;
    }

    // Generate alerts
    function generateAlerts() {
        const alerts = [];
        const alertTypes = ['danger', 'warning', 'warning', 'info', 'info'];
        const alertMessages = [
            { title: 'تركيز كلور مرتفع', body: 'تم رصد ارتفاع في تركيز الكلور عن المعدل المسموح به في المحطة' },
            { title: 'عكارة مياه غير طبيعية', body: 'ارتفاع مؤشر العكارة بشكل غير معتاد يتطلب فحص فوري' },
            { title: 'توقف مؤقت للمضخة', body: 'توقف إحدى المضخات الرئيسية عن العمل - جاري الصيانة' },
            { title: 'درجة حرارة مرتفعة', body: 'ارتفاع درجة حرارة المياه عن المعدل الطبيعي' },
            { title: 'انخفاض ضغط المياه', body: 'انخفاض في ضغط المياه بشكل ملحوظ في الشبكة' },
            { title: 'تسرب مياه مكتشف', body: 'تم اكتشاف تسرب في خطوط التوزيع الرئيسية' },
            { title: 'مؤشر TDS مرتفع', body: 'ارتفاع في إجمالي الأملاح الذائبة يتجاوز الحد المسموح به' }
        ];

        const stations = generateStations();

        for (let i = 0; i < 30; i++) {
            const station = stations[Math.floor(Math.random() * stations.length)];
            const alertMsg = alertMessages[Math.floor(Math.random() * alertMessages.length)];
            const type = alertTypes[Math.floor(Math.random() * alertTypes.length)];

            alerts.push({
                id: `alert_${i}`,
                title: alertMsg.title,
                body: alertMsg.body,
                type: type,
                stationId: station.id,
                stationName: station.name,
                governorateId: station.governorateId,
                governorateName: station.governorateName,
                timestamp: new Date(Date.now() - Math.floor(Math.random() * 86400000 * 3)).toISOString(),
                read: Math.random() > 0.7
            });
        }

        return alerts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }

    // Generate quality history for charts
    function generateQualityHistory(days = 7) {
        const history = [];
        const now = new Date();

        for (let d = days - 1; d >= 0; d--) {
            const date = new Date(now);
            date.setDate(date.getDate() - d);

            history.push({
                date: date.toISOString().split('T')[0],
                label: date.toLocaleDateString('ar-EG', { weekday: 'short', month: 'short', day: 'numeric' }),
                ph: +(Math.random() * 1.5 + 6.8).toFixed(2),
                tds: Math.floor(Math.random() * 200 + 150),
                turbidity: +(Math.random() * 3 + 0.5).toFixed(2),
                chlorine: +(Math.random() * 1.5 + 0.3).toFixed(2),
                conductivity: Math.floor(Math.random() * 300 + 400),
                quality: Math.floor(Math.random() * 20 + 75)
            });
        }

        return history;
    }

    // Generate monthly report data
    function generateMonthlyReport() {
        const months = ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
        return months.map((month, index) => ({
            month,
            monthIndex: index,
            waterQuality: Math.floor(Math.random() * 15 + 80),
            violations: Math.floor(Math.random() * 12),
            maintenance: Math.floor(Math.random() * 8 + 2),
            consumption: Math.floor(Math.random() * 50000 + 100000)
        }));
    }

    // Public API
    return {
        governorates,
        allUsers,
        adminUsers,
        monitorUsers,
        getGovernorateById(id) {
            return governorates.find(g => g.id === id);
        },
        getUserByUsername(username) {
            return allUsers.find(u => u.username === username);
        },
        getStationsForGovernorate(govId) {
            const stations = generateStations();
            return govId ? stations.filter(s => s.governorateId === govId) : stations;
        },
        getAllStations() {
            return generateStations();
        },
        getAlertsForGovernorate(govId) {
            const alerts = generateAlerts();
            return govId ? alerts.filter(a => a.governorateId === govId) : alerts;
        },
        getQualityHistory(govId, days = 7) {
            // In a real app, this would filter by governorate
            return generateQualityHistory(days);
        },
        getMonthlyReport() {
            return generateMonthlyReport();
        },
        getStats(govId) {
            const stations = this.getStationsForGovernorate(govId);
            const alerts = this.getAlertsForGovernorate(govId);

            return {
                totalStations: stations.length,
                activeStations: stations.filter(s => s.status === 'active').length,
                warningStations: stations.filter(s => s.status === 'warning').length,
                dangerStations: stations.filter(s => s.status === 'danger').length,
                totalAlerts: alerts.length,
                unreadAlerts: alerts.filter(a => !a.read).length,
                avgQuality: Math.floor(Math.random() * 15 + 80),
                dailyConsumption: Math.floor(Math.random() * 200000 + 500000)
            };
        }
    };
})();
